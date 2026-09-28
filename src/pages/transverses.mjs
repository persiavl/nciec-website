import { devis, btn, pageHero, block, ctaBand, breadcrumbLd } from '../layout.mjs';

export default {
  path: '/nos-solutions/prestations-transverses/',
  active: 'solutions',
  title: 'Parkings, nettoyage informatique et moquettes | NCIEC Luxembourg',
  description: 'Prestations complémentaires disponibles sur tous nos contrats : nettoyage de parkings, postes informatiques et salles serveurs, moquettes et tapis.',
  jsonLd: [breadcrumbLd([{ name: 'Nos solutions', path: '/nos-solutions/' }, { name: 'Prestations complémentaires', path: '/nos-solutions/prestations-transverses/' }])],
  body: () => `
${pageHero({
  crumbs: [{ label: 'Nos solutions', href: '/nos-solutions/' }, { label: 'Prestations complémentaires' }],
  eyebrowText: 'Sur tous les contrats',
  title: 'Prestations complémentaires',
  chapeau: 'Ces trois prestations s’ajoutent à n’importe quel contrat d’entretien, quel que soit le type de bâtiment.',
  cta: btn('Ajouter une prestation à mon contrat', devis('complementaires'), 'primary'),
  image: 'parking-autolaveuse',
  alt: 'Autolaveuse NCIEC dans un parking souterrain',
})}

${block({
  id: 'parkings', image: 'parking-autolaveuse', alt: 'Agent NCIEC nettoyant les allées d’un parking en sous-sol',
  title: 'Nettoyage de parkings',
  body: `<p>Le parking est souvent le premier contact physique avec votre entreprise — et le dernier endroit qu’on pense à nettoyer.</p>
  <p>En surface ou en sous-sol : retrait des détritus, traitement des flaques d’huile et de carburant, nettoyage des rigoles d’évacuation, dépoussiérage des box, lavage haute pression ou vapeur des sols. Marquage au sol repris si nécessaire.</p>`,
})}

${block({
  id: 'informatique', tint: true, reverse: true, image: 'nettoyage-informatique', alt: 'Agente NCIEC désinfectant un clavier et un poste de travail',
  title: 'Nettoyage informatique',
  body: `<p>Claviers, souris, écrans, téléphones, imprimantes et photocopieurs concentrent les contaminations sans jamais être nettoyés par l’entretien courant. Nous appliquons les protocoles recommandés par les comités d’hygiène et de sécurité, avec des produits qui n’attaquent ni les plastiques ni les contacts.</p>
  <p>Nettoyage approfondi des salles informatiques et salles serveurs : dépoussiérage sous plancher technique, grilles de ventilation, baies.</p>`,
})}

${block({
  id: 'moquettes', image: 'couloir-autolaveuse', alt: 'Nettoyage mécanique de la moquette d’un couloir',
  title: 'Moquettes, tapis et sols souples',
  body: `<p>Shampooing, injection-extraction ou nettoyage à sec selon la fibre et le niveau d’encrassement. Programme d’entretien annuel plutôt qu’intervention de sauvetage : c’est moins cher et la moquette dure plus longtemps.</p>`,
})}

${ctaBand({
  title: 'Compléter votre contrat existant',
  text: 'Indiquez votre site et la prestation souhaitée : nous l’intégrons au plan d’intervention.',
  cta: btn('Ajouter une prestation à mon contrat', devis('complementaires'), 'mint'),
})}
`,
};
