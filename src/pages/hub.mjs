import { icon, SOLUTIONS, devis, btn, link, img, eyebrow, checklist, pageHero, ctaBand, breadcrumbLd } from '../layout.mjs';

export default {
  path: '/nos-solutions/',
  active: 'solutions',
  title: 'Nos solutions de nettoyage et facility services | NCIEC',
  description: 'Entretien de bureaux, vitrerie, façades, extérieurs, fin de chantier et facility services. Découvrez l’ensemble des prestations NCIEC au Luxembourg.',
  jsonLd: [breadcrumbLd([{ name: 'Nos solutions', path: '/nos-solutions/' }])],
  body: () => `
${pageHero({
  crumbs: [{ label: 'Nos solutions' }],
  title: 'Nos solutions',
  chapeau: 'De l’entretien quotidien d’un immeuble de bureaux au nettoyage d’une façade de sept étages, nos prestations se combinent en un seul contrat. Choisissez le domaine qui vous concerne.',
  cta: btn('Demander un devis gratuit', devis(''), 'primary'),
  image: 'video-nacelle',
  alt: 'Technicien NCIEC sur une nacelle élévatrice devant la façade vitrée d’un immeuble',
})}

<section class="section" aria-labelledby="entreprises">
  <div class="container">
    <div class="section-head">
      ${eyebrow('B2B')}
      <h2 id="entreprises">Pour les entreprises et les institutions</h2>
    </div>
    <ul class="solution-list" role="list">
      ${SOLUTIONS.map((s, i) => `
      <li class="solution reveal">
        <div class="solution__media">${img(s.img, s.alt)}</div>
        <div class="solution__body">
          <span class="solution__num">0${i + 1}</span>
          <h3><a href="${s.href}">${s.title}</a></h3>
          ${checklist(s.bullets)}
          ${link('Découvrir', s.href)}
        </div>
      </li>`).join('')}
    </ul>
  </div>
</section>

<section class="section section--tint" aria-labelledby="hub-particuliers">
  <div class="container split">
    <div class="split__text">
      ${eyebrow('B2C')}
      <h2 id="hub-particuliers">Pour les particuliers</h2>
      <p class="lead">Aide-ménagère, repassage, remise en état, nettoyage de moquette : nos prestations à domicile sont regroupées sur une page dédiée, avec le détail de l’abattement fiscal applicable.</p>
      ${btn('Voir les services aux particuliers', '/particuliers/', 'primary')}
    </div>
    <div class="split__media reveal">${img('video-hall', 'Agente NCIEC lavant le sol d’un hall avec son chariot de nettoyage')}</div>
  </div>
</section>

<section class="section" aria-labelledby="transverses">
  <div class="container">
    <div class="section-head section-head--split">
      <div>
        ${eyebrow('Sur tous les contrats')}
        <h2 id="transverses">Prestations transverses</h2>
      </div>
      <p class="lead">Certaines prestations s’ajoutent à n’importe quel contrat : nettoyage de parkings, nettoyage informatique, traitement de moquettes et de sols. Elles sont décrites une fois ici et disponibles sur tous les sites.</p>
    </div>
    <ul class="mini-grid" role="list">
      <li class="mini reveal">${img('parking-autolaveuse', 'Autolaveuse NCIEC dans un parking souterrain')}<h3>Nettoyage de parkings</h3><p>Surface ou sous-sol : détritus, huiles, rigoles, lavage haute pression ou vapeur.</p>${link('En savoir plus', '/nos-solutions/prestations-transverses/#parkings')}</li>
      <li class="mini reveal">${img('nettoyage-informatique', 'Agente NCIEC nettoyant un clavier d’ordinateur')}<h3>Nettoyage informatique</h3><p>Postes, périphériques, salles serveurs : produits qui n’attaquent ni plastiques ni contacts.</p>${link('En savoir plus', '/nos-solutions/prestations-transverses/#informatique')}</li>
      <li class="mini reveal">${img('couloir-autolaveuse', 'Nettoyage mécanique d’une moquette de couloir')}<h3>Moquettes et sols souples</h3><p>Shampooing, injection-extraction ou nettoyage à sec selon la fibre.</p>${link('En savoir plus', '/nos-solutions/prestations-transverses/#moquettes')}</li>
    </ul>
  </div>
</section>

${ctaBand({
  title: 'Plusieurs besoins, un seul contrat',
  text: 'Nous visitons le site, relevons les surfaces et remettons une offre détaillée par zone et par fréquence — sans engagement.',
  cta: btn('Demander un devis gratuit', devis(''), 'accent'),
})}
`,
};
