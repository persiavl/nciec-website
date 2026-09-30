import { icon, devis, btn, pageHero, toc, block, ctaBand, related, note, breadcrumbLd } from '../layout.mjs';

const P = 'vitres';

export default {
  path: '/nos-solutions/nettoyage-de-vitres/',
  active: 'solutions',
  title: 'Nettoyage de vitres et façades vitrées au Luxembourg | NCIEC',
  description: 'Lavage de vitres intérieures et extérieures, stores, verrières et travaux en hauteur sur nacelle. Interventions sécurisées, résultat sans traces.',
  jsonLd: [breadcrumbLd([{ name: 'Nos solutions', path: '/nos-solutions/' }, { name: 'Vitres et surfaces vitrées', path: '/nos-solutions/nettoyage-de-vitres/' }])],
  body: () => `
${pageHero({
  crumbs: [{ label: 'Nos solutions', href: '/nos-solutions/' }, { label: 'Vitres' }],
  eyebrowText: 'Vitrerie · Stores · Travaux en hauteur',
  title: 'Nettoyage de vitres et de surfaces vitrées',
  chapeau: 'Le vitrage est la première chose qu’un visiteur regarde et la dernière qu’on pense à entretenir. Nous lavons vitres, vitrines, verrières et cloisons — du rez-de-chaussée au dernier étage.',
  cta: btn('Demander un devis gratuit', devis(P), 'primary'),
  image: 'facade-cordistes',
  alt: 'Trois cordistes NCIEC lavent les vitres d’un immeuble de bureaux',
})}
${toc([['lavage', 'Lavage de vitres'], ['hauteur', 'Travaux en hauteur'], ['stores', 'Stores'], ['frequence', 'Fréquence']])}

${block({
  id: 'lavage', image: 'vitres-interieur', alt: 'Laveur de vitres NCIEC nettoyant une baie vitrée à la raclette',
  title: 'Lavage de vitres',
  body: `<p>Vitrages intérieurs et extérieurs, vitrines, baies, cloisons de verre. Eau osmosée et matériel professionnel : pas de traces, pas de dépôt calcaire, pas de résidus sur les joints. Interventions régulières ou ponctuelles, y compris en horaires décalés.</p>`,
})}

${block({
  id: 'hauteur', tint: true, reverse: true, image: 'video-nacelle', alt: 'Technicien NCIEC sur une nacelle élévatrice le long d’une façade',
  title: 'Travaux en hauteur',
  body: `<p>Façades vitrées, sièges sociaux, immeubles de grande hauteur. Nous intervenons sur nacelle, avec du personnel formé aux travaux en hauteur et les autorisations requises.</p>
  <p>Nous établissons avant chaque chantier un <strong>plan d’accès</strong> : type de nacelle, zone de stationnement, balisage, créneau horaire. C’est ce qui évite les reports le jour J.</p>
  ${btn('Planifier une intervention en hauteur', devis(P, 'travaux-en-hauteur'), 'primary')}`,
})}

${block({
  id: 'stores',
  title: 'Nettoyage de stores et protections solaires',
  body: `<p>Stores intérieurs et extérieurs, vénitiens, enrouleurs, screens, textiles techniques. Dépoussiérage et nettoyage en profondeur sans déformer les lames ni bloquer les mécanismes.</p>`,
})}

<section class="section section--ice" id="frequence" aria-labelledby="frequence-t">
  <div class="container faq">
    <span class="faq__icon">${icon('clock')}</span>
    <div>
      <h2 id="frequence-t">À quelle fréquence faire laver ses vitres ?</h2>
      <p class="lead">En zone urbaine et le long des axes routiers, quatre passages par an suffisent rarement à maintenir un rendu correct ; en zone protégée, deux peuvent suffire. Nous recommandons une fréquence après visite, en fonction de l’exposition réelle du bâtiment.</p>
      ${note('Sur l’ancien site, le bloc « Nettoyage de vitres avec nacelle » reprenait mot pour mot les textes « stores » et « accès difficiles ». Les trois blocs sont ici fusionnés en deux sujets distincts.', 'info')}
    </div>
  </div>
</section>

${ctaBand({
  title: 'Des vitres nettes, à la bonne fréquence',
  text: 'Nous passons voir le bâtiment, évaluons l’exposition et les accès, puis chiffrons.',
  cta: btn('Demander un devis gratuit', devis(P), 'accent'),
})}
${related('vitres')}
`,
};
