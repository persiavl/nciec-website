// Static site build — zero dependencies. `node build.mjs` → ./dist
import { mkdir, writeFile, readFile, cp, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { layout, SITE } from './src/layout.mjs';

import group from './src/pages/group.mjs';
import home from './src/pages/home.mjs';
import hub from './src/pages/hub.mjs';
import batiments from './src/pages/batiments.mjs';
import vitres from './src/pages/vitres.mjs';
import chantier from './src/pages/chantier.mjs';
import exterieurs from './src/pages/exterieurs.mjs';
import facades from './src/pages/facades.mjs';
import facility from './src/pages/facility.mjs';
import transverses from './src/pages/transverses.mjs';
import particuliers from './src/pages/particuliers.mjs';
import references from './src/pages/references.mjs';
import aPropos from './src/pages/a-propos.mjs';
import carrieres from './src/pages/carrieres.mjs';
import contact from './src/pages/contact.mjs';
import misc from './src/pages/misc.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');

// Preview hosting (e.g. GitHub Pages at user.github.io/<repo>/):
//   BASE_PATH=/<repo>  prefixes every root-relative URL
//   DEMO=1             marks every page noindex so the draft never lands in Google
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');
const DEMO = process.env.DEMO === '1';
const withBase = (html) => (BASE ? html.replace(/\b(href|src|poster|data-src-[a-z]+)="\/(?!\/)/g, `$1="${BASE}/`) : html);

// Cache busting: GitHub Pages lets browsers keep CSS/JS for 10 min, so a new page could load with an old stylesheet.
// Each link gets a fingerprint of the file's content; any change to the file changes its URL.
const fingerprint = async (rel) => createHash('sha1').update(await readFile(join(root, 'public', rel))).digest('hex').slice(0, 10);
const ASSET_VERSIONS = { '/assets/css/main.css': await fingerprint('assets/css/main.css'), '/assets/js/main.js': await fingerprint('assets/js/main.js') };
const versionAssets = (html) => Object.entries(ASSET_VERSIONS).reduce((h, [path, v]) => h.split(`"${path}"`).join(`"${path}?v=${v}"`), html);

const pages = [group, home, hub, batiments, vitres, chantier, exterieurs, facades, facility, transverses, particuliers, references, aPropos, carrieres, contact, ...misc];

// 301 map from the copy deck annex (old URL → new URL).
const REDIRECTS = [
  ['/nos-solutions/batiments-administratif/', '/nos-solutions/batiments-administratifs/'],
  ['/nos-solutions/nettoyage-de-fin-de-chantier/', '/nos-solutions/fin-de-chantier/'],
  ['/nos-solutions/exterieur-environnement/', '/nos-solutions/exterieurs-espaces-verts/'],
  ['/nos-solutions/nettoyage-de-facades-toitures/', '/nos-solutions/facades-toitures/'],
  ['/nos-solutions/aide-menagere/', '/particuliers/'],
  ['/nos-solutions/nettoyage-a-domicile/', '/particuliers/'],
  ['/nos-valeurs/', '/a-propos/'],
  ['/jobs/', '/carrieres/'],
];

await rm(out, { recursive: true, force: true });
await cp(join(root, 'public'), out, { recursive: true });

for (const p of pages) {
  const html = withBase(versionAssets(layout({ ...p, noindex: p.noindex || DEMO, body: p.body() })));
  const file = p.file ? join(out, p.file) : join(out, p.path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

// Favicon = the logo mark (first six paths of the logo SVG).
const logo = await readFile(join(root, 'public/assets/img/logo-nciec.svg'), 'utf8');
const mark = logo.match(/<path[^>]*><\/path>/g).slice(0, 6).join('');
await writeFile(join(out, 'assets/img/favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142 139">${mark}</svg>`);

const indexable = pages.filter((p) => !p.noindex);
await writeFile(join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable.map((p) => `  <url><loc>${SITE.url}${p.path}</loc></url>`).join('\n')}\n</urlset>\n`);
await writeFile(join(out, 'robots.txt'), DEMO
  ? 'User-agent: *\nDisallow: /\n'
  : `User-agent: *\nAllow: /\nDisallow: /charte/\nSitemap: ${SITE.url}/sitemap.xml\n`);

// Netlify / Cloudflare Pages style, plus Apache. Same map for /en/ counterparts once EN exists.
await writeFile(join(out, '_redirects'), REDIRECTS.map(([a, b]) => `${a}  ${b}  301`).join('\n') + '\n');
await writeFile(join(out, '.htaccess'), [
  'ErrorDocument 404 /404.html',
  'RewriteEngine On',
  ...REDIRECTS.map(([a, b]) => `RewriteRule ^${a.slice(1)}?$ ${b} [R=301,L]`),
  '',
].join('\n'));

console.log(`Built ${pages.length} pages → ${out}${BASE ? ` (base ${BASE})` : ''}${DEMO ? ' [demo, noindex]' : ''}`);
