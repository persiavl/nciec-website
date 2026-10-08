import { readFileSync } from 'node:fs';
import { icon } from './icons.mjs';
import { SITE, SOLUTIONS, ELECTRO, CLIENTS, CERTS, devis } from './data.mjs';

export { icon, SITE, SOLUTIONS, ELECTRO, devis };

// ---------- logos ----------
// Built from the official SVG: paths 0–5 = mark, 6–10 = "NCIEC", 11–18 = "Services", 19–22 = legal mark.
// Colours go through CSS variables so the same symbol works on light and dark backgrounds.
const logoPaths = readFileSync(new URL('../public/assets/img/logo-nciec.svg', import.meta.url), 'utf8')
  .match(/<path[^>]*><\/path>/g)
  .map((p) => p.replace(/fill="#008AD2"/i, 'fill="var(--lg-main, #008AD2)"').replace(/fill="#C8E8F9"/i, 'fill="var(--lg-soft, #C8E8F9)"'));
const pick = (...ranges) => ranges.flatMap(([a, b]) => logoPaths.slice(a, b + 1)).join('');
const LOGO_SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<symbol id="logo-group" viewBox="0 0 391 139">${pick([0, 5])}<g transform="translate(0 35)">${pick([6, 10], [19, 22])}</g></symbol>
<symbol id="logo-services" viewBox="0 0 391 139">${pick([0, 22])}</symbol>
<symbol id="logo-electro" viewBox="0 0 391 139">${pick([0, 10], [19, 22])}<text x="169" y="121" fill="var(--lg-main, #008AD2)" font-family="Jakarta, 'Segoe UI', sans-serif" font-weight="700" font-size="50" letter-spacing="-1">Electro</text></symbol>
</svg>`;

/** Inline logo from the sprite. name: 'group' | 'services' | 'electro' */
export const logo = (name, label, cls = 'logo') =>
  `<svg class="${cls}" viewBox="0 0 391 139" role="img" aria-label="${label}"><use href="#logo-${name}"/></svg>`;

// ---------- small helpers ----------

/** Client placeholder, e.g. ph('48 h'). Rendered highlighted so it cannot slip into production unnoticed. */
export const ph = (text) => `<mark class="ph" title="À compléter par le client">[${text}]</mark>`;

/** Editorial note — hidden by default, revealed by the "Relecture" toggle. */
export const note = (html, tone = 'warn') =>
  `<aside class="editor-note editor-note--${tone}" data-review>${icon('alert')}<div>${html}</div></aside>`;

export const btn = (label, href, variant = 'primary', extra = '') =>
  `<a class="btn btn--${variant}" href="${href}"${extra}>${label}${icon('arrow')}</a>`;

export const link = (label, href) => `<a class="text-link" href="${href}">${label}${icon('arrow')}</a>`;

export const img = (name, alt, { cls = '', eager = false, sizes = '' } = {}) =>
  `<img class="${cls}" src="/assets/img/${name}.webp" alt="${alt}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${sizes ? ` sizes="${sizes}"` : ''}>`;

export const eyebrow = (text) => `<p class="eyebrow">${text}</p>`;

export const checklist = (items) =>
  `<ul class="checklist">${items.map((i) => `<li>${icon('check')}<span>${i}</span></li>`).join('')}</ul>`;

export const slugify = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// ---------- page-level components ----------

/**
 * Client logo strip, used on the landing page, the services home and Références.
 * All logos are unified to one slate colour; hover/focus reveals the original colours.
 * Each logo gets the same visual area instead of the same height, so wide and compact marks look equally heavy.
 */
const pngSize = (file) => {
  const b = readFileSync(new URL(`../public/assets/img/clients/${file}`, import.meta.url));
  return [b.readUInt32BE(16), b.readUInt32BE(20)];
};
export function clientLogos({ heading = 'Ils nous font confiance', more = '' } = {}) {
  // copy 0 is the real list; copy 1 only exists to make the loop seamless, so it is hidden from assistive tech
  const items = (copy) => CLIENTS.map((c) => {
    const [w, h] = pngSize(`${c.key}-mono.png`);
    const height = Math.round(Math.min(54, Math.max(28, Math.sqrt(4800 / (w / h)))));
    return `<li class="client" style="--h:${height}px"${copy ? ' aria-hidden="true"' : ''}>
      <img class="client__mono" src="/assets/img/clients/${c.key}-mono.png" alt="${copy ? '' : c.name}" width="${w}" height="${h}" decoding="async">
      <img class="client__color" src="/assets/img/clients/${c.key}-color.png" alt="" width="${w}" height="${h}" decoding="async" aria-hidden="true">
    </li>`;
  }).join('');
  return `
<div class="clients" data-clients>
  <div class="clients__top">
    ${heading ? `<p class="clients__heading">${heading}</p>` : ''}
    <button class="clients__toggle" type="button" aria-pressed="false" data-clients-toggle>
      <span class="clients__pause">${icon('pause', 'icon icon--xs')}<span class="sr-only">Mettre le défilement des logos en pause</span></span>
      <span class="clients__play">${icon('play', 'icon icon--xs')}<span class="sr-only">Reprendre le défilement des logos</span></span>
    </button>
  </div>
  <div class="clients__viewport">
    <ul class="clients__track" role="list" aria-label="Logos de nos clients">${items(0)}${items(1)}</ul>
  </div>
  ${more}
</div>`;
}

/**
 * Certification cards. Every card has the same structure: mark, name, scope, issuer, credential pill.
 * Certificates show their number in the pill; labels (no number by nature) show "Label attribué".
 */
export function certCards() {
  return `<ul class="cert-cards" role="list">${CERTS.map((c) => `
  <li class="cert-card">
    <div class="cert-card__mark"><img src="/assets/img/certs/${c.key}.png" alt="${c.alt}" loading="lazy" decoding="async"></div>
    <h3 class="cert-card__name">${c.name}</h3>
    <p class="cert-card__scope">${c.scope}</p>
    <div class="cert-card__foot">
      <span class="cert-card__body">Délivré par <strong>${c.body}</strong></span>
      ${c.number
        ? `<span class="cert-pill cert-pill--cert">Certificat n° <strong>${c.number}</strong></span>`
        : `<span class="cert-pill cert-pill--label">${icon('check', 'icon icon--xs')}Label attribué</span>`}
    </div>
  </li>`).join('')}
</ul>`;
}

export const SERVICES_ROOT ={ label: 'NCIEC Services', href: '/services/' };
export const GROUP_ROOT = { label: 'Accueil', href: '/' };

export function pageHero({ crumbs = [], title, chapeau, cta, image, alt, eyebrowText, root = SERVICES_ROOT }) {
  const trail = [root, ...crumbs];
  return `
<section class="page-hero">
  <div class="container page-hero__grid">
    <div class="page-hero__text">
      <nav class="breadcrumb" aria-label="Fil d'Ariane"><ol>
        ${trail.map((c, i) => (i < trail.length - 1 ? `<li><a href="${c.href}">${c.label}</a></li>` : `<li aria-current="page">${c.label}</li>`)).join('')}
      </ol></nav>
      ${eyebrowText ? eyebrow(eyebrowText) : ''}
      <h1>${title}</h1>
      ${chapeau ? `<p class="lead">${chapeau}</p>` : ''}
      ${cta ? `<div class="btn-row">${cta}</div>` : ''}
    </div>
    ${image ? `<div class="page-hero__media">${img(image, alt, { eager: true })}<span class="halfdisc" aria-hidden="true"></span></div>` : ''}
  </div>
</section>`;
}

/** Content section: H2 + body, optionally with an image beside it. */
export function block({ id, title, body, image, alt, reverse = false, tint = false, aside = '' }) {
  const media = image ? `<div class="split__media reveal">${img(image, alt)}</div>` : aside ? `<div class="split__aside">${aside}</div>` : '';
  return `
<section class="section${tint ? ' section--tint' : ''}" id="${id}" aria-labelledby="${id}-t">
  <div class="container${media ? ` split${reverse ? ' split--media-left' : ''}` : ' narrow'}">
    <div class="split__text prose">
      <h2 id="${id}-t">${title}</h2>
      ${body}
    </div>
    ${media}
  </div>
</section>`;
}

/** "Sur cette page" anchor rail for long solution pages. items: [[id, label]] */
export const toc = (items) => `
<nav class="toc" aria-label="Sur cette page">
  <div class="container toc__inner">
    <span class="toc__label">Sur cette page</span>
    <ul>${items.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join('')}</ul>
  </div>
</nav>`;

export function ctaBand({ title, text, cta, secondary = '', tone = 'blue' }) {
  return `
<section class="cta-band cta-band--${tone}">
  <div class="container cta-band__inner">
    <div>
      <h2>${title}</h2>
      ${text ? `<p>${text}</p>` : ''}
    </div>
    <div class="btn-row">${cta}${secondary}</div>
  </div>
</section>`;
}

export function related(currentKey) {
  const items = SOLUTIONS.filter((s) => s.key !== currentKey);
  return `
<section class="section section--tint related">
  <div class="container">
    <h2 class="h3">Autres solutions</h2>
    <ul class="related__list">
      ${items.map((s) => `<li><a href="${s.href}">${icon(s.icon)}<span>${s.title}</span>${icon('arrow')}</a></li>`).join('')}
      <li><a href="/particuliers/">${icon('home')}<span>Services aux particuliers</span>${icon('arrow')}</a></li>
    </ul>
  </div>
</section>`;
}

export function complementaires(items) {
  return `
<div class="complements">
  <p class="complements__label">Prestations complémentaires</p>
  <ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>
  ${link('Voir le détail', '/nos-solutions/prestations-transverses/')}
</div>`;
}

// ---------- layout ----------

const NAV = [
  { key: 'home', label: 'Accueil', href: '/services/' },
  { key: 'solutions', label: 'Nos solutions', href: '/nos-solutions/', mega: true },
  { key: 'references', label: 'Références', href: '/references/' },
  { key: 'a-propos', label: 'À propos', href: '/a-propos/' },
  { key: 'carrieres', label: 'Carrières', href: '/carrieres/' },
  { key: 'contact', label: 'Contact', href: '/contact/' },
];

const ext = (label, href) =>
  `<a href="${href}" target="_blank" rel="noopener">${label}${icon('external', 'icon icon--xs')}<span class="sr-only"> (site externe, nouvel onglet)</span></a>`;

function header(active, overlay) {
  const mega = `
  <div class="mega" id="mega-solutions">
    <div class="container mega__inner">
      <div class="mega__col">
        <p class="mega__title">Entreprises et institutions</p>
        <ul class="mega__grid">
          ${SOLUTIONS.map((s) => `<li><a href="${s.href}">${icon(s.icon)}<span><strong>${s.title}</strong><small>${s.hook}</small></span></a></li>`).join('')}
        </ul>
      </div>
      <div class="mega__col mega__col--side">
        <p class="mega__title">Particuliers</p>
        <a class="mega__card" href="/particuliers/">${icon('home')}<span><strong>Aide-ménagère et services à domicile</strong><small>Abattement fiscal applicable</small></span></a>
        <p class="mega__title">Sur tous les contrats</p>
        <a class="mega__card" href="/nos-solutions/prestations-transverses/">${icon('layers')}<span><strong>Prestations complémentaires</strong><small>Parkings, informatique, moquettes</small></span></a>
        <a class="text-link" href="/nos-solutions/">Toutes nos solutions${icon('arrow')}</a>
      </div>
    </div>
  </div>`;

  return `
<a class="skip-link" href="#main">Aller au contenu</a>
<header class="site-header${overlay ? ' site-header--overlay' : ''}" data-header>
  <div class="topbar">
    <div class="container topbar__inner">
      <p class="topbar__contact">
        <a class="topbar__group" href="/">${icon('arrow', 'icon icon--xs topbar__back')}Groupe NCIEC</a>
        <a href="${SITE.phoneHref}">${icon('phone', 'icon icon--xs')}${SITE.phone}</a>
        <a href="mailto:${SITE.email}">${icon('mail', 'icon icon--xs')}${SITE.email}</a>
      </p>
      <p class="topbar__links">
        ${ext('Espace client', SITE.portal)}
        ${ext('NCIEC Electro', ELECTRO.url)}
        <span class="lang" role="group" aria-label="Langue">
          <a href="/" aria-current="true" lang="fr">FR</a>
          <span aria-disabled="true" title="Traduction anglaise à venir" lang="en">EN</span>
          <span aria-disabled="true" title="Version allemande à l'étude" lang="de">DE</span>
        </span>
      </p>
    </div>
  </div>
  <div class="navbar">
    <div class="container navbar__inner">
      <a class="brand" href="/services/" aria-label="NCIEC Services — accueil">
        <img class="brand__logo brand__logo--color" src="/assets/img/logo-nciec.svg" alt="" width="140" height="50">
        <img class="brand__logo brand__logo--white" src="/assets/img/logo-nciec-white.svg" alt="" width="140" height="50">
      </a>
      <nav class="mainnav" aria-label="Navigation principale" data-mainnav>
        <ul class="mainnav__list">
          ${NAV.map((n) =>
            n.mega
              ? `<li class="has-mega">
                  <a href="${n.href}"${active === n.key ? ' aria-current="page"' : ''}>${n.label}</a>
                  <button class="mega-toggle" aria-expanded="false" aria-controls="mega-solutions" data-mega-toggle><span class="sr-only">Afficher les solutions</span>${icon('chevron', 'icon icon--xs')}</button>
                  ${mega}
                </li>`
              : `<li><a href="${n.href}"${active === n.key ? ' aria-current="page"' : ''}>${n.label}</a></li>`
          ).join('')}
        </ul>
        <div class="mainnav__mobile-extra">
          ${ext('Espace client', SITE.portal)}
          ${ext('NCIEC Electro', ELECTRO.url)}
          <a href="${SITE.phoneHref}">${icon('phone', 'icon icon--xs')}${SITE.phone}</a>
        </div>
      </nav>
      <a class="btn btn--primary btn--sm navbar__cta" href="${devis('')}">Demander un devis gratuit</a>
      <button class="burger" aria-expanded="false" aria-controls="mobile-nav" data-burger>
        ${icon('menu', 'icon burger__open')}${icon('close', 'icon burger__close')}<span class="sr-only">Menu</span>
      </button>
    </div>
  </div>
</header>`;
}

function footer() {
  return `
<footer class="site-footer">
  <div class="container site-footer__grid">
    <div class="site-footer__brand">
      <img src="/assets/img/logo-nciec-white.svg" alt="NCIEC Services" width="150" height="53">
      <p>NCIEC Services entretient les bâtiments, les extérieurs et les espaces de travail au Luxembourg : nettoyage, hygiène, facility services et services aux particuliers. Équipes formées, interventions planifiées, interlocuteur unique.</p>
      ${btn('Demander un devis gratuit', devis(''), 'accent')}
    </div>
    <nav aria-label="Solutions">
      <p class="site-footer__title">Solutions</p>
      <ul>
        ${SOLUTIONS.map((s) => `<li><a href="${s.href}">${s.title}</a></li>`).join('')}
        <li><a href="/nos-solutions/prestations-transverses/">Prestations complémentaires</a></li>
        <li><a href="/particuliers/">Services aux particuliers</a></li>
      </ul>
    </nav>
    <nav aria-label="Entreprise">
      <p class="site-footer__title">Entreprise</p>
      <ul>
        <li><a href="/">Groupe NCIEC</a></li>
        <li><a href="/references/">Références</a></li>
        <li><a href="/a-propos/">À propos et engagements</a></li>
        <li><a href="/carrieres/">Carrières</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li>${ext('Espace client', SITE.portal)}</li>
        <li>${ext('NCIEC Electro', ELECTRO.url)}</li>
      </ul>
    </nav>
    <div>
      <p class="site-footer__title">Nous trouver</p>
      <address>
        ${SITE.legal}<br>${SITE.street}<br>${SITE.zip} ${SITE.city} · ${SITE.country}
      </address>
      <p class="site-footer__contact">
        <a href="${SITE.phoneHref}">${icon('phone', 'icon icon--xs')}${SITE.phone}</a>
        <a href="mailto:${SITE.email}">${icon('mail', 'icon icon--xs')}${SITE.email}</a>
      </p>
      <p class="site-footer__certs"><span>ISO 9001</span><span>ISO 14001</span><span>ESR</span><span>SDK</span></p>
    </div>
  </div>
  <div class="container site-footer__bottom">
    <p>© <span data-year>2026</span> N.C.I.E.C. S.àr.l.</p>
    <p><a href="/rgpd/">Protection des données</a><a href="/mentions-legales/">Mentions légales</a></p>
  </div>
</footer>
<button class="review-toggle" type="button" aria-pressed="false" data-review-toggle title="Affiche les notes de rédaction et les points à valider">${icon('eye', 'icon icon--xs')}<span>Mode relecture</span></button>`;
}

// ---------- group (portal) header & footer ----------

const GROUP_NAV = [
  { key: 'activites', label: 'Nos activités', href: '/#activites' },
  { key: 'a-propos', label: 'À propos', href: '/a-propos/' },
  { key: 'carrieres', label: 'Carrières', href: '/carrieres/' },
  { key: 'implantation', label: 'Implantation', href: '/#implantation' },
  { key: 'contact', label: 'Contact', href: '/contact/' },
];

function groupHeader(active) {
  return `
<a class="skip-link" href="#main">Aller au contenu</a>
<header class="site-header site-header--group" data-header>
  <div class="topbar">
    <div class="container topbar__inner">
      <p class="topbar__contact">
        <a href="${SITE.phoneHref}">${icon('phone', 'icon icon--xs')}<span class="topbar__who">Services</span>${SITE.phone}</a>
        <a href="${ELECTRO.phoneHref}">${icon('phone', 'icon icon--xs')}<span class="topbar__who">Electro</span>${ELECTRO.phone}</a>
      </p>
      <p class="topbar__links">
        ${ext('Espace client', SITE.portal)}
        <span class="lang" role="group" aria-label="Langue">
          <a href="/" aria-current="true" lang="fr">FR</a>
          <span aria-disabled="true" title="Traduction anglaise à venir" lang="en">EN</span>
          <span aria-disabled="true" title="Version allemande à l'étude" lang="de">DE</span>
        </span>
      </p>
    </div>
  </div>
  <div class="navbar">
    <div class="container navbar__inner">
      <a class="brand" href="/" aria-label="Groupe NCIEC — accueil">${logo('group', 'NCIEC', 'brand__logo brand__logo--group')}</a>
      <nav class="mainnav" aria-label="Navigation principale" data-mainnav>
        <ul class="mainnav__list">
          ${GROUP_NAV.map((n) => `<li><a href="${n.href}"${active === n.key ? ' aria-current="page"' : ''}>${n.label}</a></li>`).join('')}
        </ul>
        <div class="mainnav__mobile-extra">
          <a href="/services/">${icon('building', 'icon icon--xs')}NCIEC Services</a>
          ${ext('NCIEC Electro', ELECTRO.url)}
          ${ext('Espace client', SITE.portal)}
        </div>
      </nav>
      <div class="unit-switch" aria-label="Nos sites">
        <a href="/services/">Services</a>
        <a href="${ELECTRO.url}" target="_blank" rel="noopener">Electro${icon('external', 'icon icon--xs')}<span class="sr-only"> (nouvel onglet)</span></a>
      </div>
      <button class="burger" aria-expanded="false" aria-controls="mobile-nav" data-burger>
        ${icon('menu', 'icon burger__open')}${icon('close', 'icon burger__close')}<span class="sr-only">Menu</span>
      </button>
    </div>
  </div>
</header>`;
}

function groupFooter() {
  return `
<footer class="site-footer">
  <div class="container site-footer__grid">
    <div class="site-footer__brand">
      ${logo('group', 'NCIEC', 'site-footer__logo')}
      <p>Deux activités, une même adresse à Howald : l’entretien des bâtiments avec NCIEC Services, l’électroménager et l’équipement avec NCIEC Electro.</p>
    </div>
    <nav aria-label="NCIEC Services">
      <p class="site-footer__title">NCIEC Services</p>
      <ul>
        <li><a href="/services/">Nettoyage et facility services</a></li>
        <li><a href="/nos-solutions/">Nos solutions</a></li>
        <li><a href="/particuliers/">Services aux particuliers</a></li>
        <li><a href="/references/">Références</a></li>
        <li><a href="${devis('')}">Demander un devis</a></li>
      </ul>
    </nav>
    <nav aria-label="NCIEC Electro">
      <p class="site-footer__title">NCIEC Electro</p>
      <ul>
        <li>${ext('Boutique en ligne', ELECTRO.url)}</li>
        <li><a href="${ELECTRO.phoneHref}">${ELECTRO.phone}</a></li>
        <li><span>${ELECTRO.hours}</span></li>
      </ul>
      <p class="site-footer__title site-footer__title--gap">Groupe</p>
      <ul>
        <li><a href="/a-propos/">À propos</a></li>
        <li><a href="/carrieres/">Carrières</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li>${ext('Espace client', SITE.portal)}</li>
      </ul>
    </nav>
    <div>
      <p class="site-footer__title">Nous trouver</p>
      <address>${SITE.legal}<br>${SITE.street}<br>${SITE.zip} ${SITE.city} · ${SITE.country}</address>
      <p class="site-footer__contact">
        <a href="${SITE.phoneHref}">${icon('phone', 'icon icon--xs')}Services ${SITE.phone}</a>
        <a href="${ELECTRO.phoneHref}">${icon('phone', 'icon icon--xs')}Electro ${ELECTRO.phone}</a>
        <a href="mailto:${SITE.email}">${icon('mail', 'icon icon--xs')}${SITE.email}</a>
      </p>
    </div>
  </div>
  <div class="container site-footer__bottom">
    <p>© <span data-year>2026</span> N.C.I.E.C. S.àr.l.</p>
    <p><a href="/rgpd/">Protection des données</a><a href="/mentions-legales/">Mentions légales</a></p>
  </div>
</footer>
<button class="review-toggle" type="button" aria-pressed="false" data-review-toggle title="Affiche les notes de rédaction et les points à valider">${icon('eye', 'icon icon--xs')}<span>Mode relecture</span></button>`;
}

export function layout({ path, title, description, body, active = '', overlay = false, noindex = false, jsonLd = [], ogImage = '/assets/img/og-image.jpg', variant = 'services' }) {
  const group = variant === 'group';
  const canonical = SITE.url + path;
  const ld = jsonLd.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n');
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_LU">
<meta property="og:site_name" content="${group ? 'NCIEC' : 'NCIEC Services'}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE.url}${ogImage}">
<meta name="theme-color" content="#0E2233">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/plus-jakarta-sans-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/inter-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/main.css">
<script>document.documentElement.classList.add('js');try{if(localStorage.getItem('nciec-review')==='1')document.documentElement.classList.add('review')}catch(e){}</script>
${ld}
</head>
<body>
${LOGO_SPRITE}
${group ? groupHeader(active) : header(active, overlay)}
<main id="main">
${body}
</main>
${group ? groupFooter() : footer()}
<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

export const breadcrumbLd = (items, root = { name: 'NCIEC Services', path: '/services/' }) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [root, ...items].map((it, i) => ({
    '@type': 'ListItem', position: i + 1, name: it.name, item: SITE.url + it.path,
  })),
});
