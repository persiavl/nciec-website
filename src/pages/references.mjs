import { icon, devis, ph, note, btn, pageHero, ctaBand, breadcrumbLd, clientLogos, todo } from '../layout.mjs';

const caseStudy = (n, image) => `
<article class="case reveal">
  <div class="case__media"><img src="/assets/img/${image}.webp" alt="" loading="lazy" decoding="async"><span class="case__tag">Étude de cas 0${n}</span></div>
  <div class="case__body">
    <h3>${ph('Client ou secteur — ex. « Siège d’une banque privée, Kirchberg »')}</h3>
    <dl class="case__facts">
      <div><dt>${icon('building', 'icon icon--xs')}Contexte</dt><dd>${ph('surface, nombre d’occupants, contrainte principale')}</dd></div>
      <div><dt>${icon('layers', 'icon icon--xs')}Prestation</dt><dd>${ph('périmètre et fréquence')}</dd></div>
      <div><dt>${icon('check', 'icon icon--xs')}Résultat</dt><dd>${ph('élément mesurable : réclamations en baisse, contrat unique au lieu de plusieurs prestataires, délai tenu sur X mois')}</dd></div>
    </dl>
  </div>
</article>`;

export default {
  path: '/references/',
  active: 'references',
  title: 'Références clients | NCIEC Services Luxembourg',
  description: 'Entreprises, institutions et gestionnaires immobiliers qui nous confient l’entretien de leurs bâtiments au Luxembourg.',
  jsonLd: [breadcrumbLd([{ name: 'Références', path: '/references/' }])],
  body: () => `
${pageHero({
  crumbs: [{ label: 'Références' }],
  eyebrowText: 'Références',
  title: 'Ils nous confient leurs bâtiments',
  chapeau: `${ph('X')} sites entretenus au Luxembourg, du bureau de 200 m² au siège social de ${ph('X')} m². Voici quelques exemples de ce que nous faisons au quotidien.`,
  cta: btn('Demander un devis gratuit', devis(''), 'primary'),
  image: 'bureaux-equipe',
  alt: 'Équipe NCIEC en intervention dans un plateau de bureaux',
})}

<div class="container todo-wrap">${todo("le nombre de sites entretenus et la surface du plus grand site (en m²).")}</div>

<section class="section section--flush-top" aria-label="Clients">
  <div class="container">
    ${clientLogos()}
    ${todo("l’accord écrit de chaque client pour afficher son logo, et le logo IL Cosmetics en haute définition (SVG ou PNG large ; le fichier actuel fait 171 px).")}
  </div>
</section>

<section class="section section--tint" aria-labelledby="cas-t">
  <div class="container">
    <h2 id="cas-t">Études de cas</h2>
    ${todo("3 études de cas : le client ou le secteur (peut rester anonyme), le contexte (surface, occupants, contrainte principale), la prestation (périmètre, fréquence) et un résultat mesurable.")}
    <div class="case-list">
      ${caseStudy(1, 'robot-nettoyage')}
      ${caseStudy(2, 'parking-autolaveuse')}
      ${caseStudy(3, 'facade-cordistes')}
    </div>
  </div>
</section>

${ctaBand({
  title: 'Votre bâtiment pourrait être le prochain cas',
  text: 'Visite sur site gratuite, offre détaillée par zone et par fréquence.',
  cta: btn('Demander un devis gratuit', devis(''), 'accent'),
})}
`,
};
