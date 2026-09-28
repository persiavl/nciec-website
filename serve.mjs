// Minimal static server for ./dist — mimics production routing (folder URLs, 301 map, 404 page).
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), 'dist');
const port = Number(process.env.PORT) || 4173;
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.mp4': 'video/mp4', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain',
};

const redirects = Object.fromEntries(
  (await readFile(join(root, '_redirects'), 'utf8').catch(() => '')).split('\n').filter(Boolean).map((l) => l.trim().split(/\s+/))
);

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  let path = decodeURIComponent(url.pathname);
  if (redirects[path]) { res.writeHead(301, { Location: redirects[path] }); return res.end(); }
  if (!extname(path) && !path.endsWith('/')) { res.writeHead(301, { Location: path + '/' + url.search }); return res.end(); }
  if (path.endsWith('/')) path += 'index.html';
  const file = normalize(join(root, path));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
  try {
    const info = await stat(file);
    const type = types[extname(file)] || 'application/octet-stream';
    // Range support so <video> can seek.
    const range = req.headers.range?.match(/bytes=(\d*)-(\d*)/);
    if (range && type === 'video/mp4') {
      const start = Number(range[1] || 0);
      const end = range[2] ? Number(range[2]) : info.size - 1;
      const buf = (await readFile(file)).subarray(start, end + 1);
      res.writeHead(206, { 'Content-Type': type, 'Content-Range': `bytes ${start}-${end}/${info.size}`, 'Accept-Ranges': 'bytes', 'Content-Length': buf.length });
      return res.end(buf);
    }
    res.writeHead(200, { 'Content-Type': type, 'Accept-Ranges': 'bytes' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { 'Content-Type': types['.html'] });
    res.end(await readFile(join(root, '404.html')).catch(() => 'Not found'));
  }
}).listen(port, () => console.log(`NCIEC preview → http://localhost:${port}`));
