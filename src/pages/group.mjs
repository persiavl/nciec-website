import { icon, SITE, ELECTRO, devis, ph, note, btn, link, img, eyebrow, checklist, logo, GROUP_ROOT, clientLogos } from '../layout.mjs';

// Simple line illustration for the Electro card (no product photos available yet).
const appliances = `
<svg class="unit__art" viewBox="0 0 360 200" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
  <rect x="28" y="22" width="84" height="160" rx="10"/><path d="M28 80h84M44 42v22M44 96v30"/>
  <rect x="136" y="72" width="100" height="110" rx="10"/><circle cx="186" cy="134" r="30"/><circle cx="186" cy="134" r="18"/><path d="M150 88h20M216 88h6"/>
  <rect x="258" y="100" width="78" height="82" rx="8"/><rect x="270" y="124" width="54" height="44" rx="4"/><path d="M272 110h8M288 110h8M304 110h8"/>
  <path d="M8 182h344" opacity=".35"/>
</svg>`;

/** Wide coloured bar at the bottom of the hero — one per business (layout requested by the client). */
const bar = ({ href, name, what, domain, tone, external }) => `
<a class="g-bar g-bar--${tone}" href="${href}" data-door data-door-tone="${tone}" data-door-domain="${domain}">
  <span class="g-bar__text"><strong>Entrer sur ${name}</strong><small>${what} · ${domain}</small></span>
  <span class="g-bar__arrow" aria-hidden="true">${icon(external ? 'external' : 'arrow')}</span>
</a>`;


/** Full-width "door" at the bottom of a business card. Its ::after stretches over the whole card. */
const door = ({ href, label, domain, tone, external }) => `
<a class="door" href="${href}" data-door data-door-tone="${tone}" data-door-domain="${domain}">
  <span class="door__frame" aria-hidden="true"><span class="door__leaf"></span></span>
  <span class="door__text"><strong>${label}</strong><small>${domain}${external ? ' · autre site' : ''}</small></span>
  <span class="door__arrow" aria-hidden="true">${icon(external ? 'external' : 'arrow')}</span>
</a>`;


/**
 * Landing visual. The teaser video only shows cleaning; the client will supply a visual that represents
 * both companies. Put it in public/assets/img/ as a .webp and set its name here, e.g. 'landing-hero'.
 * While null, the teaser video is used.
 */
const LANDING_IMAGE = null;

export default {
  path: '/',
  variant: 'portal',
  active: '',
  title: 'NCIEC — Nettoyage, facility services et électroménager à Howald',
  description: 'Le groupe NCIEC réunit NCIEC Services (nettoyage et facility services) et NCIEC Electro (électroménager et équipement) au Luxembourg.',
  jsonLd: [{
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': SITE.url + '/#org',
    name: 'NCIEC',
    legalName: SITE.legal,
    url: SITE.url + '/',
    logo: SITE.url + '/assets/img/logo-nciec.svg',
    address: { '@type': 'PostalAddress', streetAddress: '15 rue des Joncs', postalCode: 'L-1818', addressLocality: 'Howald', addressCountry: 'LU' },
    subOrganization: [
      { '@type': 'LocalBusiness', name: 'NCIEC Services', url: SITE.url + '/services/', telephone: SITE.phone },
      { '@type': 'Store', name: 'NCIEC Electro', url: ELECTRO.url, telephone: ELECTRO.phone },
    ],
  }],
  body: () => `
<section class="hero g-vhero" aria-labelledby="g-title">
  <div class="hero__media">
    ${LANDING_IMAGE
      ? `<img class="hero__video" src="/assets/img/${LANDING_IMAGE}.webp" alt="" fetchpriority="high" decoding="async">`
      : `<video class="hero__video" autoplay muted loop playsinline preload="metadata"
      poster="/assets/video/teaser-poster.webp"
      data-src-desktop="/assets/video/teaser-720.mp4" data-src-mobile="/assets/video/teaser-480.mp4" aria-hidden="true">
    </video>`}
    <div class="hero__scrim"></div>
  </div>
  <div class="container g-top">
    <span class="g-top__logo">${logo('group', 'NCIEC')}</span>
    <!--LANG-SWITCH-->
  </div>
  <div class="container g-vhero__content">
    <p class="g-vhero__eyebrow">Groupe NCIEC · Howald, Luxembourg</p>
    <h1 id="g-title"><span class="g-hl g-hl--services">Nettoyage</span> et <span class="g-hl g-hl--electro">électroménager</span><br>au Luxembourg</h1>
    <p class="g-vhero__lead">NCIEC Services nettoie et entretient vos bâtiments. NCIEC Electro vend, livre et installe vos appareils. Choisissez votre activité :</p>
  </div>
  <div class="container g-bars" aria-label="Nos deux sites">
    ${bar({ href: '/services/', name: 'NCIEC Services', what: 'Nettoyage et facility services', domain: 'nciec.lu/services', tone: 'services', external: false })}
    ${bar({ href: ELECTRO.url, name: 'NCIEC Electro', what: 'Électroménager et équipement', domain: 'nciecsales.lu', tone: 'electro', external: true })}
  </div>
  ${LANDING_IMAGE ? '' : `<button class="g-vhero__pause video-toggle" type="button" data-video-toggle aria-pressed="false">
    <span class="video-toggle__pause">${icon('pause', 'icon icon--sm')}<span class="sr-only">Mettre la vidéo en pause</span></span>
    <span class="video-toggle__play">${icon('play', 'icon icon--sm')}<span class="sr-only">Lire la vidéo</span></span>
  </button>`}
  <p class="g-legal">
    <span>© <span data-year>2026</span> N.C.I.E.C. S.àr.l.</span>
    <a href="/rgpd/">Protection des données</a>
    <a href="/mentions-legales/">Mentions légales</a>
  </p>
</section>
`,
};
