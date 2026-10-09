import { icon, devis, ph, btn, pageHero, toc, block, ctaBand, related, checklist, breadcrumbLd, todo } from '../layout.mjs';

const P = 'exterieurs';

export default {
  path: '/nos-solutions/exterieurs-espaces-verts/',
  active: 'solutions',
  title: 'Espaces verts, balayage et service hiver au Luxembourg | NCIEC',
  description: 'Entretien d’espaces verts, gestion des déchets, balayage mécanique et déneigement 24h/24. Extérieurs entretenus toute l’année.',
  jsonLd: [breadcrumbLd([{ name: 'Nos solutions', path: '/nos-solutions/' }, { name: 'Extérieurs et espaces verts', path: '/nos-solutions/exterieurs-espaces-verts/' }])],
  body: () => `
${pageHero({
  crumbs: [{ label: 'Nos solutions', href: '/nos-solutions/' }, { label: 'Extérieurs' }],
  eyebrowText: 'Espaces verts · Déchets · Balayage · Hiver',
  title: 'Extérieurs, espaces verts et service hiver',
  chapeau: 'Les abords d’un bâtiment sont vus avant l’intérieur. Nous entretenons vos espaces verts, gérons vos déchets, balayons vos surfaces et assurons le déneigement en hiver — sous un seul contrat annuel.',
  cta: btn('Demander un devis gratuit', devis(P), 'primary'),
  image: 'video-exterieur',
  alt: 'Jardinier NCIEC taillant des massifs, tondeuse autoportée en arrière-plan',
})}
${toc([['espaces-verts', 'Espaces verts'], ['dechets', 'Déchets'], ['balayage', 'Balayage'], ['hiver', 'Service hiver']])}

${block({
  id: 'espaces-verts', image: 'video-exterieur', alt: 'Entretien d’une pelouse et de massifs par les jardiniers NCIEC',
  title: 'Entretien des espaces verts',
  body: `<p>Jardiniers et paysagistes qualifiés, planning d’entretien établi sur l’année :</p>
  ${checklist(['Tonte et entretien des pelouses, scarification', 'Taille d’arbres, de haies et de massifs', 'Désherbage et arrosage', 'Végétalisation, remplacement de plantes, décoration florale'])}
  <p>Nous adaptons les passages au cycle végétatif plutôt qu’à un calendrier fixe — moins d’interventions inutiles en creux de saison, plus de présence au printemps.</p>`,
})}

${block({
  id: 'dechets', tint: true, reverse: true, image: 'gestion-dechets', alt: 'Agents NCIEC sortant des conteneurs à déchets',
  title: 'Gestion des déchets',
  body: `<p>Rentrée et sortie des conteneurs, enlèvement des encombrants, destruction de documents confidentiels. Une prestation ingrate, entièrement externalisable, qui libère vos équipes internes.</p>`,
})}

${block({
  id: 'balayage', image: 'video-balayeuse', alt: 'Balayeuse NCIEC et agent au nettoyeur haute pression sur une place pavée',
  title: 'Balayage mécanique et remise en état après événement',
  body: `<p>Balayeuse et équipes mobilisables après fêtes, manifestations publiques et rassemblements :</p>
  ${checklist(['Balayage et aspiration des rues et zones piétonnes', 'Évacuation rapide des déchets', 'Remise en état des espaces publics', 'Interventions de nuit et en horaires décalés'])}`,
})}

<section class="section section--winter" id="hiver" aria-labelledby="hiver-t">
  <div class="container split">
    <div class="split__text prose">
      <p class="eyebrow">${icon('snow', 'icon icon--xs')} 24h/24 · 7j/7</p>
      <h2 id="hiver-t">Service hiver</h2>
      <p>Dès que le verglas arrive, les délais comptent — et la responsabilité du propriétaire est engagée sur les accès. Nos équipes sont mobilisables 24h/24 et 7j/7 pour le déneigement manuel et mécanique et le salage des entrées, trottoirs, escaliers, rampes et parkings.</p>
      ${todo("la date limite pour réserver un contrat service hiver.")}
      <p class="deadline">${icon('clock', 'icon icon--sm')}<span>Le contrat hiver se cale avant ${ph('octobre')} : passé cette date, les créneaux se réduisent.</span></p>
      ${btn('Réserver un contrat service hiver', devis(P, 'service-hiver'), 'accent')}
    </div>
    <div class="split__aside">
      <ul class="winter-list" role="list">
        <li>${icon('snow')}Déneigement manuel et mécanique</li>
        <li>${icon('drop')}Salage préventif et curatif</li>
        <li>${icon('building')}Entrées, trottoirs, escaliers, rampes</li>
        <li>${icon('layers')}Parkings et voies d’accès</li>
      </ul>
    </div>
  </div>
</section>

${ctaBand({
  title: 'Un contrat annuel pour tous vos extérieurs',
  text: 'Espaces verts l’été, déneigement l’hiver, déchets et balayage toute l’année.',
  cta: btn('Demander un devis gratuit', devis(P), 'accent'),
})}
${related(P)}
`,
};
