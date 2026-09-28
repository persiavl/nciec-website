import { icon, devis, ph, btn, link, pageHero, toc, block, ctaBand, related, complementaires, breadcrumbLd } from '../layout.mjs';

const P = 'batiments-administratifs';

export default {
  path: '/nos-solutions/batiments-administratifs/',
  active: 'solutions',
  title: 'Nettoyage de bureaux et d’immeubles au Luxembourg | NCIEC',
  description: 'Entretien quotidien de bureaux, parties communes et locaux industriels : sols, sanitaires, vitrages intérieurs, consommables. Devis gratuit sous 48 h.',
  jsonLd: [breadcrumbLd([{ name: 'Nos solutions', path: '/nos-solutions/' }, { name: 'Bureaux et bâtiments administratifs', path: '/nos-solutions/batiments-administratifs/' }])],
  body: () => `
${pageHero({
  crumbs: [{ label: 'Nos solutions', href: '/nos-solutions/' }, { label: 'Bureaux et bâtiments' }],
  eyebrowText: 'Entreprises · Syndics · Industrie',
  title: 'Nettoyage de bureaux et de bâtiments administratifs',
  chapeau: 'Un bureau propre ne se remarque pas. C’est un bureau mal entretenu qui se voit — par vos collaborateurs chaque matin, et par vos visiteurs en trente secondes. Nous prenons en charge l’entretien courant de vos locaux, avec un plan d’intervention écrit et une équipe attitrée.',
  cta: btn('Demander un devis gratuit', devis(P), 'primary'),
  image: 'bureaux-aspiration',
  alt: 'Deux agentes NCIEC nettoient un plateau de bureaux, l’une avec un aspirateur dorsal',
})}
${toc([['entretien', 'Entretien courant'], ['sols', 'Sols'], ['vitrages', 'Vitrages intérieurs'], ['consommables', 'Consommables'], ['dechets', 'Déchets'], ['robots', 'Robots'], ['offre', 'Demander une offre']])}

<section class="section" id="entretien" aria-labelledby="entretien-t">
  <div class="container">
    <div class="section-head section-head--split">
      <h2 id="entretien-t">Entretien courant des locaux</h2>
      <p class="lead">Nettoyage quotidien, hebdomadaire ou ponctuel, selon la fréquentation réelle de vos surfaces. Le plan précise pour chaque zone la prestation, la fréquence et l’horaire.</p>
    </div>
    <div class="tile-grid">
      <article class="tile reveal"><span class="tile__icon">${icon('building')}</span><h3>Bureaux et espaces de travail</h3><p>Postes de travail, salles de réunion, cuisines et sanitaires. Interventions avant l’ouverture ou après la fermeture, sans perturber vos équipes.</p></article>
      <article class="tile reveal"><span class="tile__icon">${icon('users')}</span><h3>Parties communes et cages d’escaliers</h3><p>Pour les bailleurs, syndics et copropriétés : halls, paliers, ascenseurs, locaux poubelles. Prestation contractualisée, traçable, opposable aux locataires.</p></article>
      <article class="tile reveal"><span class="tile__icon">${icon('tools')}</span><h3>Locaux industriels et techniques</h3><p>Zones de production, entrepôts, quais. Nous adaptons produits et méthodes à vos contraintes d’hygiène, de sécurité et de circulation.</p></article>
    </div>
    <p>${btn('Planifier une visite sur site', devis(P, 'visite-sur-site'), 'outline')}</p>
  </div>
</section>

${block({
  id: 'sols', tint: true, image: 'traitement-sols', alt: 'Agente NCIEC traitant un sol en pierre avec une monobrosse',
  title: 'Traitement et protection des sols',
  body: `<p>Marbre, pierre naturelle, carrelage, PVC, vinyle, béton, parquet : le mauvais produit abîme un sol en une seule application. Nous intervenons en cristallisation, décapage, mise en cire, lustrage et pose de protection, avec un protocole défini par type de revêtement.</p>
  <p class="result">${icon('check', 'icon icon--sm')}<span><strong>Résultat attendu :</strong> une surface qui résiste au passage intensif, se nettoie plus vite au quotidien et se rénove moins souvent.</span></p>
  ${btn('Demander un diagnostic de sol', devis(P, 'diagnostic-sol'), 'primary')}`,
})}

${block({
  id: 'vitrages', reverse: true, image: 'vitres-interieur', alt: 'Laveur de vitres NCIEC nettoyant une cloison vitrée de salle de réunion',
  title: 'Vitrages intérieurs et cloisons vitrées',
  body: `<p>Vitres intérieures, cloisons, portes vitrées : nettoyage sans traces, en intervention régulière ou ponctuelle.</p>
  <p>${link('Façades vitrées et travaux en hauteur', '/nos-solutions/nettoyage-de-vitres/')}</p>`,
})}

${block({
  id: 'consommables', tint: true, image: 'consommables', alt: 'Agente NCIEC réapprovisionnant un distributeur d’essuie-mains dans des sanitaires',
  title: 'Gestion des consommables',
  body: `<p>Papier, savon, produits sanitaires, sacs déchets : nous suivons les stocks et réapprovisionnons avant la rupture. Vous ne gérez plus de commandes, et vous ne stockez plus six mois d’avance.</p>`,
})}

${block({
  id: 'dechets', reverse: true, image: 'gestion-dechets', alt: 'Deux agents NCIEC en gilet haute visibilité déplacent des conteneurs à déchets',
  title: 'Gestion des déchets',
  body: `<p>Tri sélectif, collecte interne, sortie et rentrée des conteneurs, enlèvement des encombrants. Nous documentons les flux, ce qui vous sert directement dans votre reporting environnemental.</p>`,
})}

${block({
  id: 'robots', tint: true, image: 'robot-nettoyage', alt: 'Robot autonome de lavage des sols dans un plateau de bureaux',
  title: 'Robots de nettoyage',
  body: `<p>Sur les grandes surfaces et les zones à fort passage, nous déployons des robots autonomes pour le lavage des sols. L’intérêt n’est pas le gadget : c’est une régularité mesurable et un temps d’équipe reporté sur les tâches qui demandent une intervention humaine.</p>
  ${btn('Voir si votre site s’y prête', devis(P, 'robots'), 'outline')}`,
})}

<section class="section" aria-label="Prestations complémentaires">
  <div class="container narrow">
    ${complementaires(['Nettoyage de parkings', 'Nettoyage informatique', 'Traitement de moquettes'])}
  </div>
</section>

<div id="offre">
${ctaBand({
  title: 'Demander une offre',
  text: 'Chaque bâtiment est différent. Nous visitons le site, relevons les surfaces et remettons une offre détaillée par zone et par fréquence — sans engagement.',
  cta: btn('Demander un devis gratuit', devis(P), 'mint'),
})}
</div>
${related(P)}
`,
};
