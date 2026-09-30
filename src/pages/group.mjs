import { icon, SITE, ELECTRO, devis, ph, note, btn, link, img, eyebrow, checklist, logo, GROUP_ROOT } from '../layout.mjs';

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


export default {
  path: '/',
  variant: 'group',
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
    <video class="hero__video" autoplay muted loop playsinline preload="metadata"
      poster="/assets/video/teaser-poster.webp"
      data-src-desktop="/assets/video/teaser-720.mp4" data-src-mobile="/assets/video/teaser-480.mp4" aria-hidden="true">
    </video>
    <div class="hero__scrim"></div>
  </div>
  <div class="container g-vhero__content">
    <p class="g-vhero__eyebrow">Groupe NCIEC · Howald, Luxembourg</p>
    <h1 id="g-title">Entretenir et équiper<br>vos bâtiments</h1>
    <p class="g-vhero__lead">Deux métiers, une même adresse. Choisissez votre activité :</p>
  </div>
  <div class="container g-bars" aria-label="Nos deux sites">
    ${bar({ href: '/services/', name: 'NCIEC Services', what: 'Nettoyage et facility services', domain: 'nciec.lu/services', tone: 'services', external: false })}
    ${bar({ href: ELECTRO.url, name: 'NCIEC Electro', what: 'Électroménager et équipement', domain: 'nciecsales.lu', tone: 'electro', external: true })}
  </div>
  <button class="g-vhero__pause video-toggle" type="button" data-video-toggle aria-pressed="false">
    <span class="video-toggle__pause">${icon('pause', 'icon icon--sm')}<span class="sr-only">Mettre la vidéo en pause</span></span>
    <span class="video-toggle__play">${icon('play', 'icon icon--sm')}<span class="sr-only">Lire la vidéo</span></span>
  </button>
</section>

<section class="section g-units" id="activites" aria-labelledby="activites-t">
  <div class="container">
    <div class="section-head section-head--split">
      <div>
        ${eyebrow('Nos activités')}
        <h2 id="activites-t">Deux sites, un seul groupe</h2>
      </div>
      <p class="lead">NCIEC Services entretient vos bâtiments sur site. NCIEC Electro vend, livre et installe l\u2019équipement. Chaque activité a son propre site et son équipe.</p>
    </div>
  </div>
  <div class="container g-units__grid">

    <article class="unit unit--services">
      <div class="unit__media">
        ${img('facade-cordistes', '', { eager: true })}
      </div>
      <div class="unit__body">
        ${logo('services', 'NCIEC Services', 'unit__logo')}
        <h2 class="unit__title">Nettoyage et facility services</h2>
        <p class="unit__lead">Bureaux, vitres, façades, extérieurs et interventions spécialisées pour les entreprises, les institutions, les copropriétés et les particuliers.</p>
        ${checklist(['Entretien de bureaux et de bâtiments', 'Vitres, façades et toitures', 'Extérieurs, espaces verts et service hiver', 'Fin de chantier et facility services'])}
        <p class="unit__extra">${link('Demander un devis', devis(''))}</p>
      </div>
      ${door({ href: '/services/', label: 'Entrer sur NCIEC Services', domain: 'nciec.lu/services', tone: 'services', external: false })}
    </article>

    <article class="unit unit--electro">
      <div class="unit__media unit__media--art">
        ${appliances}
        <span class="unit__brands">${ELECTRO.brands.slice(0, 6).join(' · ')}</span>
      </div>
      <div class="unit__body">
        ${logo('electro', 'NCIEC Electro', 'unit__logo')}
        <h2 class="unit__title">Électroménager et équipement</h2>
        <p class="unit__lead">Des milliers de références des grandes marques, pour la maison comme pour les professionnels, avec les services d\u2019installation.</p>
        ${checklist(['Gros électroménager et appareils encastrables', 'Cuisine et ménage, TV et audio, traitement de l\u2019air', 'Gamme professionnelle et outillage', 'Livraison et installation'])}
        <p class="unit__extra"><a class="text-link" href="${ELECTRO.phoneHref}">${icon('phone', 'icon icon--sm')}${ELECTRO.phone}</a></p>
      </div>
      ${door({ href: ELECTRO.url, label: 'Entrer dans la boutique NCIEC Electro', domain: 'nciecsales.lu', tone: 'electro', external: true })}
    </article>

  </div>
  <div class="container">${note('Pas encore de photo pour NCIEC Electro : la carte utilise une illustration. À remplacer par une photo réelle du showroom ou de l\u2019équipe (pas de banque d\u2019images).', 'info')}</div>
</section>

<section class="section" aria-labelledby="groupe-t">
  <div class="container split">
    <div class="split__text">
      ${eyebrow('Le groupe')}
      <h2 id="groupe-t">Une entreprise luxembourgeoise, deux savoir-faire</h2>
      <p class="lead">Depuis ${ph('année')}, NCIEC entretient et équipe des bâtiments au Luxembourg. Nos équipes interviennent sur site pour le nettoyage et les facility services ; notre boutique conseille, livre et installe l’équipement.</p>
      <ul class="g-facts" role="list">
        <li><strong>2</strong><span>activités complémentaires</span></li>
        <li><strong>${ph('X')}</strong><span>collaborateurs</span></li>
        <li><strong>1</strong><span>site à Howald</span></li>
      </ul>
      ${link('Qui nous sommes', '/a-propos/')}
    </div>
    <div class="split__media">${img('gestion-dechets', 'Deux collaborateurs NCIEC en tenue haute visibilité')}</div>
  </div>
</section>

<section class="section section--navy g-careers" aria-labelledby="carrieres-t">
  <div class="container g-careers__inner">
    <div>
      ${eyebrow('Carrières')}
      <h2 id="carrieres-t">Nous recrutons pour nos deux activités</h2>
      <p>Contrats déclarés, horaires annoncés à l’avance, formation à la prise de poste. Postulez à une offre ou envoyez une candidature spontanée.</p>
    </div>
    <div class="btn-row">
      ${btn('Voir les offres d’emploi', '/carrieres/', 'accent')}
      ${btn('Candidature spontanée', '/carrieres/#candidature', 'ghost-light')}
    </div>
  </div>
</section>

<section class="section section--tint" id="implantation" aria-labelledby="implantation-t">
  <div class="container g-location">
    <div class="g-location__text">
      ${eyebrow('Implantation')}
      <h2 id="implantation-t">Une adresse pour les deux activités</h2>
      <address class="g-address">${icon('pin')}<span><strong>${SITE.legal}</strong><br>${SITE.street}<br>${SITE.zip} ${SITE.city}, ${SITE.country}</span></address>
      <p class="small">${ph('Parking visiteurs, arrêt de bus le plus proche, accès au showroom')}</p>
      <p><a class="text-link" href="https://www.openstreetmap.org/search?query=15%20rue%20des%20Joncs%20Howald" target="_blank" rel="noopener">Ouvrir l’itinéraire${icon('external')}<span class="sr-only"> (nouvel onglet)</span></a></p>
    </div>
    <div class="map map--large" role="img" aria-label="Plan stylisé : NCIEC, 15 rue des Joncs à Howald">
      <svg viewBox="0 0 480 260" aria-hidden="true"><rect width="480" height="260" fill="currentColor" opacity=".06"/><path d="M0 170 C120 140 220 200 480 130" stroke="currentColor" stroke-width="14" fill="none" opacity=".18"/><path d="M160 0 L220 260" stroke="currentColor" stroke-width="9" fill="none" opacity=".14"/><path d="M0 60 L480 88" stroke="currentColor" stroke-width="6" fill="none" opacity=".12"/><path d="M340 0 L300 260" stroke="currentColor" stroke-width="5" fill="none" opacity=".1"/></svg>
      <span class="map__pin">${icon('pin')}</span>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="contact-t">
  <div class="container">
    <div class="section-head section-head--split">
      <div>
        ${eyebrow('Contact')}
        <h2 id="contact-t">À qui s’adresser ?</h2>
      </div>
      <p class="lead">Chaque activité a sa propre ligne. Pour tout le reste, le formulaire de contact oriente votre demande vers la bonne équipe.</p>
    </div>
    <div class="g-contacts">
      <article class="g-contact">
        ${logo('services', 'NCIEC Services', 'g-contact__logo')}
        <p>Devis de nettoyage, facility services, intervention urgente</p>
        <ul class="info-list" role="list">
          <li>${icon('phone')}<a href="${SITE.phoneHref}">${SITE.phone}</a></li>
          <li>${icon('mail')}<a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li>${icon('clock')}<span>${ph('lundi–vendredi, XX h–XX h')}</span></li>
        </ul>
        ${btn('Demander un devis gratuit', devis(''), 'primary')}
      </article>
      <article class="g-contact">
        ${logo('electro', 'NCIEC Electro', 'g-contact__logo')}
        <p>Conseil produit, commande, livraison, installation, service après-vente</p>
        <ul class="info-list" role="list">
          <li>${icon('phone')}<a href="${ELECTRO.phoneHref}">${ELECTRO.phone}</a></li>
          <li>${icon('mail')}<span>${ph('e-mail NCIEC Electro')}</span></li>
          <li>${icon('clock')}<span>${ELECTRO.hours}</span></li>
        </ul>
        ${btn('Contacter NCIEC Electro', '/contact/?prestation=electro-conseil#devis', 'outline')}
      </article>
    </div>
  </div>
</section>
`,
};
