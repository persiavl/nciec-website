import { icon, SITE, devis, ph, note, btn, pageHero, toc, block, ctaBand, related, complementaires, breadcrumbLd } from '../layout.mjs';

const P = 'facility-services';

const sinistres = [
  ['Après incendie', 'Retrait des suies avec produits dégraissants spécifiques, lessivage des sols, murs et menuiseries, traitement des odeurs.'],
  ['Après dégât des eaux', 'Aspiration, séchage et déshumidification des locaux, désinfection, évacuation des éléments non récupérables.'],
  ['Après décès', 'Désinfection selon protocole réglementé, avec le matériel adapté. Intervention discrète, en lien avec la famille ou le gestionnaire du bien.'],
  ['Logement encombré (syndrome de Diogène)', 'Débarras, nettoyage et désinfection complète des surfaces. Nous intervenons sans jugement et en toute discrétion, en coordination avec les services sociaux ou le propriétaire lorsque c’est nécessaire.'],
];

export default {
  path: '/nos-solutions/facility-services/',
  active: 'solutions',
  title: 'Facility services et interventions spécialisées | NCIEC Luxembourg',
  description: 'Nettoyage après sinistre, désinfection, dératisation, mise à disposition de personnel, petits déménagements et maintenance légère au Luxembourg.',
  jsonLd: [breadcrumbLd([{ name: 'Nos solutions', path: '/nos-solutions/' }, { name: 'Facility services', path: '/nos-solutions/facility-services/' }])],
  body: () => `
${pageHero({
  crumbs: [{ label: 'Nos solutions', href: '/nos-solutions/' }, { label: 'Facility services' }],
  eyebrowText: 'Interventions spécialisées',
  title: 'Facility services',
  chapeau: 'Tout ce qui ne relève pas de l’entretien courant mais qu’il faut bien traiter : un dégât des eaux, un départ de logement insalubre, une équipe manquante, un mobilier à déplacer. Nous intervenons vite, avec le matériel et le personnel formés pour chaque cas.',
  cta: btn('Demander une intervention', devis(P), 'primary'),
  image: 'couloir-autolaveuse',
  alt: 'Agent NCIEC conduisant une autolaveuse dans un couloir',
})}
${toc([['sinistre', 'Après sinistre'], ['desinfection', 'Désinfection'], ['personnel', 'Personnel'], ['demenagements', 'Déménagements'], ['graffitis', 'Graffitis']])}

<section class="section" id="sinistre" aria-labelledby="sinistre-t">
  <div class="container">
    <div class="section-head section-head--split">
      <div>
        <p class="eyebrow eyebrow--alert">${icon('alert', 'icon icon--xs')} Urgence</p>
        <h2 id="sinistre-t">Nettoyage après sinistre</h2>
      </div>
      <p class="lead">Un sinistre se traite dans les heures qui suivent : limiter les dégâts, sécuriser les lieux, isoler ce qui peut être conservé. Nous intervenons en urgence et coordonnons avec votre assureur.</p>
    </div>
    <div class="tile-grid tile-grid--4">
      ${sinistres.map(([t, d]) => `<article class="tile reveal"><h3>${t}</h3><p>${d}</p></article>`).join('')}
    </div>
    <div class="urgent">
      <span class="urgent__icon">${icon('phone')}</span>
      <div><strong>Intervention urgente</strong><span>${ph('numéro dédié')} — à défaut ${SITE.phone}</span></div>
      <a class="btn btn--alert" href="${SITE.phoneHref}">${icon('phone')}Appeler maintenant</a>
    </div>
    ${note('Sans ligne d’urgence dédiée, la promesse d’intervention en urgence n’est pas tenable (point 7 de la liste de décisions).')}
  </div>
</section>

${block({
  id: 'desinfection', tint: true, image: 'consommables', alt: 'Agente NCIEC en gants de protection dans des sanitaires',
  title: 'Désinfection et lutte contre les nuisibles',
  body: `<p>Désinfection de locaux communs et sociaux, dératisation, désinsectisation, élimination des nuisibles. Pour les professionnels, les collectivités et les particuliers. Traçabilité des produits utilisés et rapport d’intervention.</p>`,
})}

${block({
  id: 'personnel', reverse: true, image: 'bureaux-equipe', alt: 'Équipe NCIEC en intervention dans un open space',
  title: 'Mise à disposition de personnel',
  body: `<p>Absence imprévue, surcroît d’activité, mission ponctuelle : nous fournissons du personnel formé et encadré, pour quelques jours comme pour plusieurs mois. Vous n’assumez ni le recrutement ni l’administration.</p>`,
})}

${block({
  id: 'demenagements', tint: true,
  title: 'Petits déménagements et maintenance légère',
  body: `<p>Déplacement de mobilier, réaménagement d’étage, petites réparations et entretien technique courant. Utile lors des changements de bureaux, sans mobiliser une entreprise de déménagement complète.</p>`,
})}

${block({
  id: 'graffitis', image: 'haute-pression', alt: 'Nettoyage d’un mur au jet haute pression',
  title: 'Aérogommage et retrait de graffitis',
  body: `<p>Retrait des tags sur façades, murs et équipements par des procédés adaptés à chaque matériau, sans creuser le support. Option de protection anti-graffitis après traitement.</p>`,
})}

<section class="section" aria-label="Prestations complémentaires">
  <div class="container narrow">${complementaires(['Nettoyage de parkings', 'Nettoyage informatique', 'Traitement des sols'])}</div>
</section>

${ctaBand({
  title: 'Un besoin qui sort de l’ordinaire ?',
  text: 'Décrivez la situation : nous revenons vers vous avec une solution et un délai.',
  cta: btn('Demander une intervention', devis(P), 'accent'),
})}
${related(P)}
`,
};
