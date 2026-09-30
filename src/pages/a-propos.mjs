import { icon, ELECTRO, ph, note, btn, link, pageHero, ctaBand, eyebrow, logo, breadcrumbLd, GROUP_ROOT } from '../layout.mjs';

const certs = [
  ['ISO 9001', 'Management de la qualité'],
  ['ISO 14001', 'Management environnemental'],
  [ph('SDK'), ph('à compléter')],
  [ph('ESR'), 'Entreprise Socialement Responsable'],
];

export default {
  path: '/a-propos/',
  variant: 'group',
  active: 'a-propos',
  title: 'À propos et engagements RSE | NCIEC Luxembourg',
  description: 'Groupe luxembourgeois : nettoyage et facility services avec NCIEC Services, électroménager avec NCIEC Electro. Nos valeurs, nos certifications ISO 9001 et 14001, nos engagements sociaux et environnementaux.',
  jsonLd: [breadcrumbLd([{ name: 'À propos', path: '/a-propos/' }], { name: 'Accueil', path: '/' })],
  body: () => `
${pageHero({
  root: GROUP_ROOT,
  crumbs: [{ label: 'À propos' }],
  eyebrowText: 'À propos',
  title: 'Qui nous sommes',
  chapeau: `NCIEC entretient et équipe des bâtiments au Luxembourg depuis ${ph('année')}. ${ph('X')} collaborateurs, deux activités, un seul pays d’intervention, et l’exigence que les équipes qui passent chez vous soient formées, déclarées et correctement traitées.`,
  image: 'gestion-dechets',
  alt: 'Deux agents NCIEC en tenue haute visibilité',
})}

<section class="section section--flush-top" aria-labelledby="activites-t">
  <div class="container">
    <h2 id="activites-t" class="h3">Nos deux activités</h2>
    <div class="g-contacts">
      <article class="g-contact">
        ${logo('services', 'NCIEC Services', 'g-contact__logo')}
        <p>Nettoyage de bureaux et de bâtiments, vitres, façades, extérieurs, fin de chantier, facility services et services aux particuliers.</p>
        ${link('Découvrir NCIEC Services', '/services/')}
      </article>
      <article class="g-contact">
        ${logo('electro', 'NCIEC Electro', 'g-contact__logo')}
        <p>Électroménager, appareils encastrables, TV et audio, outillage et gamme professionnelle, avec livraison et installation.</p>
        <a class="text-link" href="${ELECTRO.url}" target="_blank" rel="noopener">Visiter la boutique${icon('external')}<span class="sr-only"> (nouvel onglet)</span></a>
      </article>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="valeurs-t">
  <div class="container">
    <div class="section-head">
      ${eyebrow('Nos valeurs')}
      <h2 id="valeurs-t">Nos valeurs</h2>
    </div>
    <div class="value-grid">
      <article class="value reveal"><span class="value__icon">${icon('scale')}</span><h3>Intégrité</h3><p>Transparence sur ce que nous facturons, respect des engagements pris et des législations applicables. Ce qui est écrit au contrat est ce qui est exécuté sur site.</p></article>
      <article class="value value--accent reveal"><span class="value__icon">${icon('leaf')}</span><h3>Responsabilité environnementale</h3><p>Produits et méthodes choisis pour limiter l’impact : dosage contrôlé, réduction des consommations d’eau, tri systématique des déchets d’intervention. Notre certification ISO 14001 encadre ces choix et les fait auditer.</p></article>
      <article class="value reveal"><span class="value__icon">${icon('users')}</span><h3>Responsabilité sociale</h3><p>Personnel déclaré, formé et encadré. Sécurité au travail, diversité, conditions d’emploi stables. Dans un secteur où la sous-traitance en cascade est courante, nous intervenons avec nos propres équipes.</p></article>
    </div>
  </div>
</section>

<section class="section section--tint" aria-labelledby="certif-t">
  <div class="container">
    <h2 id="certif-t">Certifications</h2>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr><th scope="col">Certification</th><th scope="col">Portée</th><th scope="col">N° / Organisme</th><th scope="col">Validité</th></tr></thead>
        <tbody>${certs.map(([c, p]) => `<tr><th scope="row">${c}</th><td>${p}</td><td>${ph('à compléter')}</td><td>${ph('à compléter')}</td></tr>`).join('')}</tbody>
      </table>
    </div>
    ${note('Préciser pour chaque certification l’entité couverte (NCIEC Services, NCIEC Electro ou les deux). Afficher un logo sans numéro ni organisme n’apporte rien à un acheteur professionnel — et se remarque dans un appel d’offres. Ce tableau doit être complété avant mise en ligne.')}
  </div>
</section>

<section class="section" aria-labelledby="equipes-t">
  <div class="container split">
    <div class="split__text prose">
      <h2 id="equipes-t">Nos équipes</h2>
      <p>${ph('2–3 phrases sur l’encadrement, la formation initiale et continue.')}</p>
      ${btn('Nous rencontrer', '/contact/', 'primary')}
    </div>
    <div class="split__media team-placeholder">
      <img src="/assets/img/bureaux-equipe.webp" alt="" loading="lazy" decoding="async">
      <span>${ph('Photo d’équipe réelle, pas de banque d’images')}</span>
    </div>
  </div>
</section>

${ctaBand({
  title: 'Envie de travailler avec nous — ou chez nous ?',
  cta: btn('Nous rencontrer', '/contact/', 'accent'),
  secondary: btn('Voir les offres d’emploi', '/carrieres/', 'ghost-light'),
})}
`,
};
