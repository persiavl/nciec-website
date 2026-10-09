import { icon, SITE, SOLUTIONS, devis, ph, note, btn, link, img, eyebrow, ctaBand, clientLogos, certCards, todo } from '../layout.mjs';

export default {
  path: '/services/',
  active: 'home',
  title: 'Nettoyage et facility services au Luxembourg | NCIEC Services',
  description: `Nettoyage de bureaux, vitres, façades, extérieurs et facility services au Luxembourg. Équipes formées, planning fiable, devis sous 48 h.`,
  jsonLd: [{
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE.url + '/services/#org',
    name: SITE.legal,
    url: SITE.url + '/services/',
    logo: SITE.url + '/assets/img/logo-nciec.svg',
    image: SITE.url + '/assets/img/og-image.jpg',
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: { '@type': 'Country', name: 'Luxembourg' },
    address: { '@type': 'PostalAddress', streetAddress: '15 rue des Joncs', postalCode: 'L-1818', addressLocality: 'Howald', addressCountry: 'LU' },
  }],
  body: () => `
<section class="hero" aria-labelledby="hero-title">
  <div class="hero__media">
    <video class="hero__video" autoplay muted loop playsinline preload="metadata"
      poster="/assets/video/teaser-poster.webp"
      data-src-desktop="/assets/video/teaser-720.mp4" data-src-mobile="/assets/video/teaser-480.mp4" aria-hidden="true">
    </video>
    <div class="hero__scrim"></div>
  </div>
  <div class="container hero__content">
    ${eyebrow('Nettoyage · Hygiène · Facility services')}
    <h1 id="hero-title">Nettoyage et facility services <span class="nowrap">au Luxembourg</span></h1>
    <p class="hero__lead">Des bâtiments propres, des extérieurs entretenus, un interlocuteur unique. Nous intervenons chez les entreprises, les institutions et les copropriétés partout au Grand-Duché.</p>
    <div class="btn-row">
      ${btn('Demander un devis gratuit', devis(''), 'accent')}
      ${btn('Voir nos solutions', '/nos-solutions/', 'ghost-light')}
    </div>
  </div>
  <div class="hero__bar">
    <div class="container hero__bar-inner">
      <ul class="hero__facts">
        <li>${icon('shield', 'icon icon--sm')}ISO 9001 · ISO 14001</li>
        <li>${icon('users', 'icon icon--sm')}Nos propres équipes, déclarées</li>
        <li>${icon('flag', 'icon icon--sm')}100 % Luxembourg</li>
      </ul>
      <button class="video-toggle" type="button" data-video-toggle aria-pressed="false">
        <span class="video-toggle__pause">${icon('pause', 'icon icon--sm')}<span>Mettre la vidéo en pause</span></span>
        <span class="video-toggle__play">${icon('play', 'icon icon--sm')}<span>Lire la vidéo</span></span>
      </button>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="prise-en-charge">
  <div class="container">
    <div class="section-head section-head--split">
      <div>
        ${eyebrow('Nos solutions')}
        <h2 id="prise-en-charge">Ce que nous prenons en charge</h2>
      </div>
      <p class="lead">Un bâtiment ne s'entretient pas par à-coups. Nous mettons en place un plan d'intervention écrit, une équipe attitrée et un contrôle qualité régulier — puis nous nous y tenons. Vous gardez un seul contact pour l'ensemble des prestations.</p>
    </div>
    <ul class="card-grid" role="list">
      ${SOLUTIONS.map((s) => `
      <li class="card reveal">
        <a class="card__link" href="${s.href}">
          <div class="card__media">${img(s.img, s.alt)}</div>
          <div class="card__body">
            <span class="card__icon">${icon(s.icon)}</span>
            <h3>${s.title}</h3>
            <p>${s.hook}</p>
            <span class="card__more">Découvrir${icon('arrow')}</span>
          </div>
        </a>
      </li>`).join('')}
    </ul>
    <p class="particulier-link">${icon('home', 'icon icon--sm')} Vous êtes un particulier ? ${link('Aide-ménagère et services à domicile', '/particuliers/')}</p>
  </div>
</section>

<section class="section section--tint" aria-labelledby="pourquoi">
  <div class="container split split--media-left">
    <div class="split__media reveal">
      ${img('bureaux-equipe', 'Deux agentes NCIEC en tenue bleue nettoient les postes de travail d’un open space')}
      <div class="stat-chip">${icon('clock', 'icon icon--sm')}<span>Rappel sous ${ph('24 h')}<br><small>visite sur site gratuite</small></span></div>
    </div>
    <div class="split__text">
      ${eyebrow('Notre méthode')}
      <h2 id="pourquoi">Pourquoi les bâtiments nous sont confiés</h2>
      <div class="feature-list">
        <div class="feature">
          <span class="feature__icon">${icon('user')}</span>
          <div><h3>Un interlocuteur, pas un standard</h3>
          <p>Un responsable de compte suit votre site, connaît vos contraintes d'accès et vos horaires, et reste joignable. Les remplacements sont organisés par nous, pas subis par vous.</p></div>
        </div>
        <div class="feature">
          <span class="feature__icon">${icon('layers')}</span>
          <div><h3>Des méthodes adaptées au support</h3>
          <p>Marbre, PVC, moquette, aluminium, verre : chaque surface a sa technique. Nous établissons le protocole avant la première intervention, ce qui évite les dégradations coûteuses.</p></div>
        </div>
        <div class="feature">
          <span class="feature__icon">${icon('flag')}</span>
          <div><h3>Une entreprise luxembourgeoise</h3>
          <p>Nous travaillons exclusivement au Luxembourg. Équipes basées ici, délais d'intervention courts, connaissance des normes et des attentes du marché local.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--navy" aria-labelledby="certifications">
  <div class="container">
    <div class="section-head section-head--split">
      <div>
        ${eyebrow('Engagements')}
        <h2 id="certifications">Certifications et engagements</h2>
      </div>
      <blockquote class="pull">Nos certifications ne sont pas un décor : elles imposent des procédures écrites, des audits réguliers et un suivi des incidents. C'est ce qui rend une prestation reproductible d'un mois sur l'autre.</blockquote>
    </div>
    ${certCards()}
    ${todo("les dates de validité des certificats ISO 9001 et 14001, et l’entité couverte (NCIEC Services, NCIEC Electro ou les deux). En option : les certificats en PDF pour un lien de téléchargement.")}
    <p>${btn('En savoir plus sur nos engagements', '/a-propos/', 'ghost-light')}</p>
  </div>
</section>

<section class="section" aria-labelledby="confiance">
  <div class="container">
    <div class="section-head section-head--center">
      ${eyebrow('Références')}
      <h2 id="confiance">Ils nous font confiance</h2>
    </div>
    ${clientLogos({ heading: '' })}
    ${todo("l’accord écrit de chaque client pour afficher son logo, et le logo IL Cosmetics en haute définition (SVG ou PNG large ; le fichier actuel fait 171 px).")}
    
    <div class="testimonials">
      ${[1, 2, 3].map(() => `
      <figure class="testimonial">
        <blockquote>${ph('Témoignage court — une phrase concrète sur la prestation, idéalement avec un fait mesurable.')}</blockquote>
        <figcaption><strong>${ph('Prénom Nom')}</strong><span>${ph('Fonction, société')}</span></figcaption>
      </figure>`).join('')}
    </div>
    ${todo("2 à 3 témoignages de clients : une phrase concrète sur la prestation, avec le prénom, le nom, la fonction et la société.")}
    <p class="center">${btn('Voir nos références', '/references/', 'outline')}</p>
  </div>
</section>

<div class="container todo-wrap">${todo("les délais que vous garantissez : rappel après une demande (actuellement « 24 h ») et envoi du devis (actuellement « 48 h »).")}</div>
${ctaBand({
  title: 'Parlons de votre bâtiment',
  text: `Décrivez-nous vos surfaces et vos contraintes. Nous vous rappelons sous ${ph('24 h')} et proposons une visite sur site gratuite avant tout chiffrage.`,
  cta: btn('Demander un devis gratuit', devis(''), 'accent'),
  secondary: `<a class="btn btn--ghost-light" href="${SITE.phoneHref}">${icon('phone')}${SITE.phone}</a>`,
})}
`,
};
