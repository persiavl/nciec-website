import { icon, devis, ph, note, btn, pageHero, toc, block, ctaBand, related, breadcrumbLd } from '../layout.mjs';

const P = 'facades-toitures';

const techniques = [
  ['Nébulisation basse pression', 'Pierre naturelle, supports fragiles'],
  ['Gommage / aérogommage', 'Bois, métal, retrait de peinture ou de graffitis'],
  ['Nettoyage haute pression', 'Béton, dallages, toitures, parkings, allées'],
  ['Ponçage et peeling', 'Supports dégradés avant remise en état'],
  ['Traitement chimique ciblé', 'Mousses, lichens, dépôts organiques'],
];

export default {
  path: '/nos-solutions/facades-toitures/',
  active: 'solutions',
  title: 'Nettoyage de façades et de toitures au Luxembourg | NCIEC',
  description: 'Nettoyage et protection de façades et toitures : gommage, nébulisation, haute pression. Une alternative à la rénovation, adaptée au support.',
  jsonLd: [breadcrumbLd([{ name: 'Nos solutions', path: '/nos-solutions/' }, { name: 'Façades et toitures', path: '/nos-solutions/facades-toitures/' }])],
  body: () => `
${pageHero({
  crumbs: [{ label: 'Nos solutions', href: '/nos-solutions/' }, { label: 'Façades et toitures' }],
  eyebrowText: 'Diagnostic · Nettoyage · Protection',
  title: 'Nettoyage de façades et de toitures',
  chapeau: 'Une façade encrassée vieillit un bâtiment de dix ans. Dans la plupart des cas, un nettoyage adapté au support suffit à retrouver l’aspect d’origine — sans échafaudage de rénovation ni remise en peinture complète.',
  cta: `${btn('Demander un diagnostic de façade', devis(P, 'diagnostic-facade'), 'primary')}<p class="hero-note">Souvent une fraction du coût d’une remise en peinture complète — nous chiffrons les deux options après diagnostic.</p>`,
  image: 'haute-pression',
  alt: 'Agent NCIEC nettoyant un mur et une barrière au nettoyeur haute pression',
})}
<div class="container">${note('<strong>À valider avant publication :</strong> la revendication « 70 % moins cher qu’une nouvelle peinture » figurait sur l’ancien site sans aucune base. Elle est remplacée ici par la formulation de repli. Si le client fournit un comparatif chiffré sur un chantier réel, on peut l’afficher avec sa source.')}</div>
${toc([['diagnostic', 'Diagnostic'], ['techniques', 'Techniques'], ['toitures', 'Toitures'], ['protection', 'Hydrofuge et anti-graffitis']])}

${block({
  id: 'diagnostic', image: 'facade-cordistes', alt: 'Cordistes NCIEC inspectant et nettoyant une façade',
  title: 'Diagnostic avant intervention',
  body: `<p>Béton, pierre, bois, métal, aluminium, enduit : chaque support impose sa technique. Nous identifions le matériau, l’encrassement (pollution, mousses, salissures biologiques, graffitis) et l’état des joints avant de choisir la méthode.</p>
  <p class="result result--warn">${icon('alert', 'icon icon--sm')}<span>Un mauvais choix de pression ou de produit dégrade définitivement un parement.</span></p>`,
})}

<section class="section section--tint" id="techniques" aria-labelledby="techniques-t">
  <div class="container">
    <h2 id="techniques-t">Techniques disponibles</h2>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr><th scope="col">Technique</th><th scope="col">Usage typique</th></tr></thead>
        <tbody>${techniques.map(([t, u]) => `<tr><th scope="row">${t}</th><td>${u}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  </div>
</section>

${block({
  id: 'toitures', reverse: true, image: 'video-haute-pression-dallage', alt: 'Agent NCIEC nettoyant un dallage extérieur à haute pression',
  title: 'Toitures',
  body: `<p>Démoussage, nettoyage et traitement hydrofuge. Une toiture envahie retient l’eau, accélère l’usure des tuiles et finit par coûter une réfection.</p>`,
})}

${block({
  id: 'protection', tint: true,
  title: 'Traitement hydrofuge et anti-graffitis',
  body: `<p>Après nettoyage, l’application d’une protection ralentit le réencrassement et facilite le retrait des tags. Durée d’efficacité indicative : ${ph('X')} ans selon exposition.</p>
  ${btn('Demander un diagnostic de façade', devis(P, 'diagnostic-facade'), 'primary')}`,
})}

${related(P)}
`,
};
