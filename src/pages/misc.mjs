import { icon, ph, note, btn, pageHero, devis, GROUP_ROOT } from '../layout.mjs';

// ---------- WCAG contrast, computed at build time for the palette page ----------
const lum = (hex) => {
  const [r, g, b] = hex.match(/\w\w/g).map((h) => {
    const c = parseInt(h, 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

const PALETTE = [
  { group: 'Issues du logo', items: [
    { name: 'Bleu NCIEC', token: '--blue', hex: '#008AD2', use: 'Couleur de marque : logo, icônes, grands titres d’accent. Pas pour du petit texte blanc.' },
    { name: 'Bleu glacier', token: '--ice', hex: '#C8E8F9', use: 'Fonds de sections, badges, surfaces « propres ».' },
  ] },
  { group: 'Palette retenue — « Hi-Vis Field »', items: [
    { name: 'Bleu nuit', token: '--navy', hex: '#0E2233', use: 'Texte principal, sections sombres, pied de page. Reprend la tenue des équipes.' },
    { name: 'Bleu action', token: '--blue-600', hex: '#0071AD', use: 'Boutons et liens sur fond clair (version accessible du bleu logo).' },
    { name: 'Jaune sécurité', token: '--accent', hex: '#FFD23F', use: 'Issu des gilets haute visibilité des équipes. Réservé aux CTA principaux et aux accents sur fond sombre. Toujours avec du texte bleu nuit.' },
    { name: 'Ardoise', token: '--muted', hex: '#5B6B7A', use: 'Texte secondaire, légendes.' },
    { name: 'Nuage', token: '--mist', hex: '#F4F7F9', use: 'Fond alterné des sections, cartes.' },
    { name: 'Corail', token: '--coral', hex: '#E5533D', use: 'Réservé à l’urgence (sinistres) et aux erreurs de formulaire.' },
  ] },
];

const swatch = (s) => {
  const onWhite = ratio(s.hex, '#FFFFFF');
  const onNavy = ratio(s.hex, '#0E2233');
  const badge = (r, label) => `<span class="aa ${r >= 4.5 ? 'aa--ok' : r >= 3 ? 'aa--large' : 'aa--no'}">${label} ${r.toFixed(1)}:1</span>`;
  return `<li class="swatch">
    <span class="swatch__chip" style="background:${s.hex}"></span>
    <div class="swatch__body">
      <strong>${s.name}</strong>
      <code>${s.hex} · var(${s.token})</code>
      <p>${s.use}</p>
      <p class="swatch__aa">${badge(onWhite, 'sur blanc')}${badge(onNavy, 'sur bleu nuit')}</p>
    </div>
  </li>`;
};

const legal = (path, title, h1) => ({
  path, variant: 'group', title: `${title} | NCIEC`, description: `${h1} — NCIEC Services S.àr.l., Howald, Luxembourg.`,
  body: () => `
${pageHero({ root: GROUP_ROOT, crumbs: [{ label: h1 }], title: h1 })}
<section class="section section--flush-top"><div class="container narrow prose">
  <p>${ph('Texte juridique')}</p>
</div></section>`,
});

export default [
  legal('/rgpd/', 'Protection des données', 'Protection des données'),
  legal('/mentions-legales/', 'Mentions légales', 'Mentions légales'),
  {
    path: '/charte/',
    noindex: true,
    title: 'Charte couleurs et composants | NCIEC Services',
    description: 'Palette de couleurs proposée pour le nouveau site NCIEC Services.',
    body: () => `
${pageHero({ crumbs: [{ label: 'Charte' }], eyebrowText: 'Document interne · non indexé', title: 'Charte couleurs', chapeau: 'Les deux bleus du logo restent la base. Autour : un bleu nuit pour l’autorité, le jaune sécurité des gilets de nos équipes pour les appels à l’action, et un bleu action qui rend les boutons lisibles.' })}
<section class="section section--flush-top"><div class="container">
  ${PALETTE.map((g) => `<h2 class="h3">${g.group}</h2><ul class="swatches" role="list">${g.items.map(swatch).join('')}</ul>`).join('')}
  <p class="small">Ratios de contraste calculés selon WCAG 2.2. ≥ 4,5:1 = texte courant, ≥ 3:1 = grands textes et éléments graphiques.</p>
  <h2 class="h3">Boutons</h2>
  <div class="btn-row">${btn('Primaire', '#', 'primary')}${btn('Secondaire', '#', 'outline')}</div>
  <div class="charte-dark"><div class="btn-row">${btn('Jaune sur bleu nuit', '#', 'accent')}${btn('Fantôme clair', '#', 'ghost-light')}</div></div>
  <h2 class="h3">Typographie</h2>
  <p><strong>Plus Jakarta Sans</strong> (titres, 600–800) · <strong>Inter</strong> (texte, 400–600). Polices hébergées sur le site — aucune requête vers Google (RGPD).</p>
  <h2 class="h3">Motif</h2>
  <p>Le demi-disque du logo est repris comme élément graphique discret (coin des visuels, puces d’intertitres).</p>
</div></section>`,
  },
  {
    path: '/404.html',
    file: '404.html',
    variant: 'group',
    noindex: true,
    title: 'Page introuvable | NCIEC Services',
    description: 'Cette page n’existe pas ou a été déplacée.',
    body: () => `
<section class="section notfound"><div class="container narrow center">
  <p class="notfound__code">404</p>
  <h1>Cette page n’existe plus</h1>
  <p class="lead">Le site a été réorganisé. La plupart des anciennes adresses sont redirigées automatiquement ; sinon, repartez d’ici :</p>
  <div class="btn-row btn-row--center">${btn('Accueil', '/', 'primary')}${btn('NCIEC Services', '/services/', 'outline')}${btn('Demander un devis', devis(''), 'outline')}</div>
</div></section>`,
  },
];
