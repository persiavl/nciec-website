import { icon, devis, btn, pageHero, block, ctaBand, related, checklist, breadcrumbLd } from '../layout.mjs';

const P = 'fin-de-chantier';

export default {
  path: '/nos-solutions/fin-de-chantier/',
  active: 'solutions',
  title: 'Nettoyage de fin de chantier au Luxembourg | NCIEC Services',
  description: 'Remise en état après travaux : évacuation des gravats, décapage des sols, nettoyage des vitrages. Livraison propre, dans les délais du chantier.',
  jsonLd: [breadcrumbLd([{ name: 'Nos solutions', path: '/nos-solutions/' }, { name: 'Fin de chantier', path: '/nos-solutions/fin-de-chantier/' }])],
  body: () => `
${pageHero({
  crumbs: [{ label: 'Nos solutions', href: '/nos-solutions/' }, { label: 'Fin de chantier' }],
  eyebrowText: 'Promoteurs · Entreprises générales · Architectes',
  title: 'Nettoyage de fin de chantier',
  chapeau: 'Entre la fin des travaux et la remise des clés, il reste la poussière, les résidus de colle, les étiquettes sur les vitres et les gravats. Nous livrons le bâtiment prêt à être occupé, dans le créneau imposé par votre planning.',
  cta: btn('Demander un devis gratuit', devis(P), 'primary'),
  image: 'traitement-sols',
  alt: 'Agente NCIEC décapant un sol en pierre à la monobrosse',
})}

${block({
  id: 'perimetre', image: 'bureaux-aspiration', alt: 'Aspiration des poussières dans un plateau de bureaux avant livraison',
  title: 'Ce que couvre l’intervention',
  body: checklist([
    'Évacuation des gravats et des matériaux résiduels',
    'Aspiration industrielle des poussières fines, y compris en hauteur et en gaines',
    'Décapage et remise en état des sols selon le revêtement posé',
    'Lessivage des murs, portes, plinthes et menuiseries',
    'Nettoyage des vitrages, retrait des films et étiquettes',
    'Sanitaires et cuisines : détartrage et désinfection avant première utilisation',
  ]),
})}

${block({
  id: 'en-cours', tint: true,
  title: 'Nettoyage en cours de chantier',
  body: `<p class="lead">La remise en état au fur et à mesure de l’avancement n’est pas une option de confort : elle est attendue sur la plupart des chantiers. Nous intervenons entre les corps de métier pour éviter l’accumulation et le surcoût final.</p>`,
})}

<section class="section" aria-labelledby="types-t">
  <div class="container">
    <h2 id="types-t">Types de chantiers</h2>
    <ul class="pill-grid" role="list">
      <li>${icon('building')}Résidences et immeubles neufs</li>
      <li>${icon('layers')}Bureaux et surfaces commerciales</li>
      <li>${icon('home')}Maisons individuelles</li>
      <li>${icon('hardhat')}Rénovations lourdes</li>
    </ul>
  </div>
</section>

<section class="section section--ice" aria-labelledby="planif-t">
  <div class="container faq">
    <span class="faq__icon">${icon('clock')}</span>
    <div>
      <h2 id="planif-t">Planification</h2>
      <p class="lead">Donnez-nous la date de réception. Nous calons les équipes en amont, y compris le week-end si le planning l’exige, et confirmons par écrit le périmètre livré.</p>
    </div>
  </div>
</section>

${ctaBand({
  title: 'Votre date de réception approche ?',
  text: 'Indiquez-nous la surface, le type de chantier et la date butoir.',
  cta: btn('Demander un devis gratuit', devis(P), 'accent'),
})}
${related(P)}
`,
};
