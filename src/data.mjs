export const SITE = {
  name: 'NCIEC Services',
  legal: 'NCIEC Services S.àr.l.',
  url: 'https://www.nciec.lu',
  street: '15, rue des Joncs',
  zip: 'L-1818',
  city: 'Howald',
  country: 'Luxembourg',
  phone: '+352 20 30 60 60',
  phoneHref: 'tel:+35220306060',
  email: 'info@nciec.lu',
  portal: 'https://nciec.eu',
  shop: 'https://nciecsales.lu',
};

// Second business of the group — the appliance shop (nciecsales.lu, brand "NCIEC Electro").
export const ELECTRO = {
  name: 'NCIEC Electro',
  url: 'https://nciecsales.lu/',
  phone: '+352 40 30 60',
  phoneHref: 'tel:+35240306060',
  hours: 'Lundi–vendredi, 8 h–12 h et 13 h–16 h',
  categories: ['Gros électroménager', 'Appareils encastrables', 'Cuisine et ménage', 'TV et audio', 'Traitement de l’air', 'Outillage', 'Gamme professionnelle'],
  brands: ['Bosch', 'Siemens', 'Samsung', 'LG', 'Liebherr', 'Smeg', 'Electrolux', 'Dyson', 'Makita', 'Nilfisk'],
};

// B2B solutions — one source for the home grid, the hub, the mega menu and the related-links rail.
export const SOLUTIONS = [
  {
    key: 'batiments-administratifs',
    href: '/nos-solutions/batiments-administratifs/',
    title: 'Bureaux et bâtiments administratifs',
    short: 'Bureaux',
    hook: 'Entretien quotidien, sols, sanitaires, consommables',
    bullets: ['Entretien courant selon un plan écrit par zone', 'Traitement et protection de tous types de sols', 'Consommables et déchets gérés pour vous'],
    icon: 'building',
    img: 'bureaux-aspiration',
    alt: "Deux agentes NCIEC nettoient un plateau de bureaux ouvert, l'une avec un aspirateur dorsal",
  },
  {
    key: 'vitres',
    href: '/nos-solutions/nettoyage-de-vitres/',
    title: 'Vitres et surfaces vitrées',
    short: 'Vitres',
    hook: 'Vitrages, stores, travaux en hauteur sur nacelle',
    bullets: ['Lavage à l’eau osmosée, sans traces', 'Travaux en hauteur sur nacelle', 'Stores et protections solaires'],
    icon: 'window',
    img: 'vitres-interieur',
    alt: "Laveur de vitres NCIEC nettoyant une baie vitrée de salle de réunion",
  },
  {
    key: 'facades-toitures',
    href: '/nos-solutions/facades-toitures/',
    title: 'Façades et toitures',
    short: 'Façades & toitures',
    hook: 'Nettoyage et protection sans rénovation lourde',
    bullets: ['Diagnostic du support avant intervention', 'Nébulisation, gommage, haute pression', 'Hydrofuge et anti-graffitis'],
    icon: 'facade',
    img: 'facade-cordistes',
    alt: 'Trois cordistes NCIEC suspendus le long de la façade vitrée d’un immeuble',
  },
  {
    key: 'exterieurs',
    href: '/nos-solutions/exterieurs-espaces-verts/',
    title: 'Extérieurs et espaces verts',
    short: 'Extérieurs',
    hook: 'Espaces verts, déchets, balayage, service hiver',
    bullets: ['Entretien des espaces verts sur l’année', 'Balayage mécanique après événement', 'Service hiver 24h/24, 7j/7'],
    icon: 'tree',
    img: 'video-exterieur',
    alt: "Jardinier NCIEC taillant des massifs pendant qu'un collègue tond une grande pelouse",
  },
  {
    key: 'fin-de-chantier',
    href: '/nos-solutions/fin-de-chantier/',
    title: 'Fin de chantier',
    short: 'Fin de chantier',
    hook: 'Remise en état avant livraison',
    bullets: ['Évacuation des gravats et poussières fines', 'Décapage des sols selon le revêtement', 'Nettoyage en cours de chantier'],
    icon: 'hardhat',
    img: 'traitement-sols',
    alt: 'Agente NCIEC passant une monobrosse sur un sol en pierre devant un mur végétal',
  },
  {
    key: 'facility-services',
    href: '/nos-solutions/facility-services/',
    title: 'Facility services',
    short: 'Facility services',
    hook: 'Sinistres, désinfection, personnel, petits déménagements',
    bullets: ['Nettoyage après sinistre, en urgence', 'Désinfection et lutte contre les nuisibles', 'Mise à disposition de personnel'],
    icon: 'tools',
    img: 'couloir-autolaveuse',
    alt: 'Agent NCIEC conduisant une autolaveuse dans un couloir de bureaux',
  },
];

// Values for the "Prestation souhaitée" select. CTA links pass ?prestation=<value> to preselect it.
export const PRESTATIONS = [
  ...SOLUTIONS.map((s) => ({ value: s.key, label: s.title })),
  { value: 'particuliers', label: 'Services aux particuliers (aide-ménagère, remise en état…)' },
  { value: 'complementaires', label: 'Parkings, nettoyage informatique, moquettes' },
  { value: 'autre', label: 'Autre demande' },
];

export const devis = (prestation, objet) => {
  const q = new URLSearchParams();
  if (prestation) q.set('prestation', prestation);
  if (objet) q.set('objet', objet);
  const qs = q.toString();
  return `/contact/${qs ? `?${qs.replace(/&/g, '&amp;')}` : ''}#devis`;
};
