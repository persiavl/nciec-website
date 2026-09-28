import { icon, devis, ph, note, btn, link, pageHero, toc, block, ctaBand, breadcrumbLd } from '../layout.mjs';

const P = 'particuliers';

export default {
  path: '/particuliers/',
  active: 'solutions',
  title: 'Aide-ménagère et nettoyage à domicile au Luxembourg | NCIEC',
  description: 'Aide-ménagère, repassage, remise en état et nettoyage de moquettes à domicile. Personnel déclaré, abattement fiscal jusqu’à 450 €/mois.',
  jsonLd: [breadcrumbLd([{ name: 'Services aux particuliers', path: '/particuliers/' }])],
  body: () => `
${pageHero({
  crumbs: [{ label: 'Particuliers' }],
  eyebrowText: 'Services à domicile',
  title: 'Aide-ménagère et services à domicile',
  chapeau: 'Du ménage régulier au grand nettoyage avant un état des lieux. Personnel déclaré, sélectionné et assuré — et un abattement fiscal qui réduit sensiblement le coût réel.',
  cta: btn('Demander un devis gratuit', devis(P), 'primary'),
  image: 'video-hall',
  alt: 'Aide-ménagère NCIEC lavant un sol carrelé',
})}
${toc([['aide-menagere', 'Aide-ménagère'], ['remise-en-etat', 'Remise en état'], ['moquettes', 'Moquettes'], ['exterieurs', 'Extérieurs et vitres'], ['fiscal', 'Avantage fiscal'], ['etapes', 'Comment ça se passe']])}

${block({
  id: 'aide-menagere', image: 'bureaux-equipe', alt: 'Agente NCIEC passant la serpillière',
  title: 'Aide-ménagère',
  body: `<p>Entretien des surfaces et du mobilier, lavage et repassage du linge. À l’heure ou au forfait, ponctuellement ou chaque semaine. Nous privilégions une personne attitrée : vous n’avez pas à réexpliquer vos habitudes à chaque passage.</p>
  <h3>Repassage</h3>
  <p>Une tâche chronophage que vous pouvez simplement ne plus faire. À domicile, dans le créneau de votre choix.</p>`,
})}

${block({
  id: 'remise-en-etat', tint: true, reverse: true, image: 'traitement-sols', alt: 'Remise en état d’un sol à la monobrosse',
  title: 'Remise en état',
  body: `<p>Après travaux, rénovation, déménagement ou longue inoccupation : cristallisation, décapage et mise en cire, lustrage, lessivage des portes et menuiseries, séchage et déshumidification.</p>
  <p class="result">${icon('check', 'icon icon--sm')}<span>Utile en particulier avant un état des lieux de sortie, où le détail se paie cash sur la caution.</span></p>`,
})}

${block({
  id: 'moquettes',
  title: 'Nettoyage de moquettes et tapis',
  body: `<p>Lavage, rinçage et séchage avec les produits adaptés à la fibre. Une moquette mal traitée feutre ou déteint — et une moquette jamais traitée devient un réservoir à allergènes.</p>`,
})}

${block({
  id: 'exterieurs', tint: true, image: 'video-exterieur', alt: 'Entretien d’un jardin et d’une pelouse',
  title: 'Extérieurs et vitres pour particuliers',
  body: `<p>Espaces verts, lavage de vitres, stores, nettoyage haute pression des terrasses et allées, démoussage de toiture.</p>
  <p class="link-stack">${link('Techniques façades et toitures', '/nos-solutions/facades-toitures/')}${link('Nettoyage de vitres', '/nos-solutions/nettoyage-de-vitres/')}</p>`,
})}

<section class="section section--ice" id="fiscal" aria-labelledby="fiscal-t">
  <div class="container fiscal">
    <div>
      <p class="eyebrow">Avantage fiscal</p>
      <h2 id="fiscal-t">Jusqu’à 5 400 € déductibles par an</h2>
      <p class="lead">Les frais de personnel domestique engagés via une entreprise agréée ouvrent droit à un abattement forfaitaire de <strong>5 400 € par an, dans la limite de 450 € par mois</strong>.</p>
      <p class="small">Source : ${ph('Administration des contributions directes — lien vers la disposition en vigueur pour l’année fiscale 2026')}</p>
    </div>
    <div class="fiscal__figure" aria-hidden="true">
      <span class="fiscal__big">450 €</span>
      <span class="fiscal__small">par mois, au maximum</span>
    </div>
    ${note('<strong>À vérifier avant publication :</strong> montant repris de l’ancien site. Confirmer la valeur en vigueur pour l’année fiscale 2026 et citer la source officielle. Un chiffre fiscal périmé sur une page commerciale est un risque inutile.')}
  </div>
</section>

<section class="section" id="etapes" aria-labelledby="etapes-t">
  <div class="container">
    <h2 id="etapes-t">Comment ça se passe</h2>
    <ol class="steps" role="list">
      <li><span class="steps__n">1</span><p>Vous décrivez votre besoin par téléphone ou via le formulaire</p></li>
      <li><span class="steps__n">2</span><p>Nous proposons un créneau et une estimation</p></li>
      <li><span class="steps__n">3</span><p>Une intervenante attitrée démarre à la date convenue</p></li>
      <li><span class="steps__n">4</span><p>Vous ajustez la fréquence à tout moment</p></li>
    </ol>
  </div>
</section>

${ctaBand({
  title: 'Un intérieur entretenu, sans y penser',
  text: 'Dites-nous ce dont vous avez besoin et à quelle fréquence.',
  cta: btn('Demander un devis gratuit', devis(P), 'mint'),
})}
`,
};
