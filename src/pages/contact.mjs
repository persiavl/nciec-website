import { icon, SITE, ELECTRO, ph, note, pageHero, logo, breadcrumbLd, GROUP_ROOT } from '../layout.mjs';
import { PRESTATIONS } from '../data.mjs';

const ELECTRO_TOPICS = [
  ['electro-conseil', 'Conseil produit ou demande de prix'],
  ['electro-pro', 'Gamme professionnelle'],
  ['electro-installation', 'Livraison et installation'],
  ['electro-sav', 'Service après-vente'],
];

export default {
  path: '/contact/',
  variant: 'group',
  active: 'contact',
  title: 'Contact et demande de devis | NCIEC Luxembourg',
  description: 'Contactez NCIEC Services (nettoyage, +352 20 30 60 60) ou NCIEC Electro (électroménager, +352 40 30 60) — 15 rue des Joncs, L-1818 Howald.',
  jsonLd: [breadcrumbLd([{ name: 'Contact', path: '/contact/' }], { name: 'Accueil', path: '/' })],
  body: () => `
${pageHero({
  root: GROUP_ROOT,
  crumbs: [{ label: 'Contact' }],
  eyebrowText: 'Devis gratuit',
  title: 'Contactez-nous',
  chapeau: `Nettoyage, facility services ou électroménager : décrivez votre besoin en quelques lignes, nous transmettons votre demande à la bonne équipe. Pour un devis de nettoyage, nous vous rappelons sous ${ph('24 h ouvrées')}.`,
})}

<section class="section section--flush-top">
  <div class="container contact-grid">
    <div class="form-card" id="devis">
      <h2>Votre demande</h2>
      <form class="form" data-quote-form data-simple-form novalidate>
        <div class="field"><span class="field__label">Je suis</span>
          <div class="choice-row">
            ${['Entreprise', 'Institution', 'Copropriété', 'Particulier'].map((v, i) => `<label class="choice"><input type="radio" name="profil" value="${v.toLowerCase()}"${i === 0 ? ' required' : ''}><span>${v}</span></label>`).join('')}
          </div>
        </div>
        <div class="field"><label for="q-prest">Votre demande concerne</label>
          <select id="q-prest" name="prestation" required>
            <option value="">Choisir une prestation…</option>
            <optgroup label="NCIEC Services — nettoyage et facility services">${PRESTATIONS.map((p) => `<option value="${p.value}">${p.label}</option>`).join('')}</optgroup>
            <optgroup label="NCIEC Electro — électroménager">${ELECTRO_TOPICS.map(([v, l]) => `<option value="${v}">${l}</option>`).join('')}</optgroup>
          </select>
          <p class="field__hint" data-prefill-hint hidden>${icon('check', 'icon icon--xs')}Prérempli depuis la page que vous consultiez — modifiable.</p>
        </div>
        <div class="field-grid">
          <div class="field"><label for="q-surface">Surface approximative <span class="opt">(facultatif)</span></label><input id="q-surface" name="surface" placeholder="ex. 800 m², 3 étages"></div>
          <div class="field"><label for="q-loc">Localité</label><input id="q-loc" name="localite" autocomplete="address-level2" required></div>
          <div class="field"><label for="q-nom">Nom et prénom</label><input id="q-nom" name="nom" autocomplete="name" required></div>
          <div class="field"><label for="q-mail">E-mail</label><input id="q-mail" name="email" type="email" autocomplete="email" required></div>
          <div class="field"><label for="q-tel">Téléphone</label><input id="q-tel" name="tel" type="tel" autocomplete="tel" required></div>
        </div>
        <div class="field"><label for="q-msg">Message <span class="opt">(facultatif)</span></label><textarea id="q-msg" name="message" rows="5" placeholder="Fréquence souhaitée, contraintes d’accès, horaires…"></textarea></div>
        <label class="consent"><input type="checkbox" name="rgpd" required><span>J’accepte que mes données soient utilisées pour traiter ma demande, conformément à la <a href="/rgpd/">politique de protection des données</a>.</span></label>
        <div class="form__nav"><button type="submit" class="btn btn--primary">Envoyer ma demande${icon('arrow')}</button></div>
        <div class="form__success" data-success hidden tabindex="-1">${icon('check')}<div><strong>Merci, votre demande est bien partie.</strong><p>Nous vous rappelons sous ${ph('24 h ouvrées')} pour convenir d’une visite.</p></div></div>
      </form>
    </div>

    <aside class="contact-aside">
      <div class="info-card">
        ${logo('services', 'NCIEC Services', 'g-contact__logo')}
        <address>
          <strong>${SITE.legal}</strong><br>${SITE.street}<br>${SITE.zip} ${SITE.city}, ${SITE.country}
        </address>
        <ul class="info-list" role="list">
          <li>${icon('phone')}<a href="${SITE.phoneHref}">${SITE.phone}</a></li>
          <li>${icon('mail')}<a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li>${icon('clock')}<span>${ph('lundi–vendredi, XX h–XX h')}</span></li>
          <li class="info-list__alert">${icon('alert')}<span>Urgences sinistre : ${ph('numéro dédié, si existant')}</span></li>
        </ul>
      </div>
      <div class="info-card">
        ${logo('electro', 'NCIEC Electro', 'g-contact__logo')}
        <ul class="info-list" role="list">
          <li>${icon('phone')}<a href="${ELECTRO.phoneHref}">${ELECTRO.phone}</a></li>
          <li>${icon('mail')}<span>${ph('e-mail NCIEC Electro')}</span></li>
          <li>${icon('clock')}<span>${ELECTRO.hours}</span></li>
          <li>${icon('external')}<a href="${ELECTRO.url}" target="_blank" rel="noopener">Boutique en ligne<span class="sr-only"> (nouvel onglet)</span></a></li>
        </ul>
      </div>
      <div class="info-card map-card">
        <h2 class="h3">Nous trouver</h2>
        <div class="map" role="img" aria-label="Plan stylisé : NCIEC Services, 15 rue des Joncs à Howald">
          <svg viewBox="0 0 320 180" aria-hidden="true"><rect width="320" height="180" fill="currentColor" opacity=".06"/><path d="M0 120 C80 100 140 140 320 90" stroke="currentColor" stroke-width="10" fill="none" opacity=".18"/><path d="M110 0 L150 180" stroke="currentColor" stroke-width="7" fill="none" opacity=".14"/><path d="M0 40 L320 60" stroke="currentColor" stroke-width="5" fill="none" opacity=".12"/></svg>
          <span class="map__pin">${icon('pin')}</span>
        </div>
        <p class="small">${ph('Parking visiteurs, arrêt de bus le plus proche')}</p>
        <p><a class="text-link" href="https://www.openstreetmap.org/search?query=15%20rue%20des%20Joncs%20Howald" target="_blank" rel="noopener">Ouvrir l’itinéraire${icon('external')}<span class="sr-only"> (nouvel onglet)</span></a></p>
      </div>
    </aside>
  </div>
  <div class="container">${note('Maquette front-end : le formulaire valide les champs et affiche la confirmation, mais n’envoie encore rien. Le champ « Prestation souhaitée » se préremplit via <code>?prestation=</code> depuis chaque CTA.', 'info')}</div>
</section>
`,
};
