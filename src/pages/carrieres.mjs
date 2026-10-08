import { icon, ph, note, btn, pageHero, checklist, eyebrow, breadcrumbLd, GROUP_ROOT } from '../layout.mjs';

const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const shifts = ['08h–14h', '08h–16h', '14h–22h', '22h–06h'];
const langs = [['fr', 'Français'], ['lb', 'Luxembourgeois'], ['de', 'Allemand'], ['en', 'Anglais'], ['pt', 'Portugais']];
const radio = (name, opts, required = false) =>
  `<div class="choice-row">${opts.map(([v, l], i) => `<label class="choice"><input type="radio" name="${name}" value="${v}"${required && i === 0 ? ' required' : ''}><span>${l}</span></label>`).join('')}</div>`;

export default {
  path: '/carrieres/',
  variant: 'group',
  active: 'carrieres',
  title: 'Offres d’emploi et candidature | NCIEC Luxembourg',
  description: 'Postes en CDI au Luxembourg chez NCIEC Services et NCIEC Electro : agent d’entretien, laveur de vitres, candidatures spontanées. Candidature en ligne, personnel déclaré et formé.',
  jsonLd: [breadcrumbLd([{ name: 'Carrières', path: '/carrieres/' }], { name: 'Accueil', path: '/' })],
  body: () => `
${pageHero({
  root: GROUP_ROOT,
  crumbs: [{ label: 'Carrières' }],
  eyebrowText: 'On recrute',
  title: 'Travailler chez NCIEC',
  chapeau: 'Contrats déclarés, horaires annoncés à l’avance, formation à la prise de poste et matériel fourni. Nous recrutons en continu au Luxembourg, pour NCIEC Services comme pour NCIEC Electro.',
  cta: btn('Déposer ma candidature', '#candidature', 'primary'),
  image: 'nettoyage-informatique',
  alt: 'Agente NCIEC souriante en intervention sur un poste de travail',
})}

<section class="section" aria-labelledby="postes-t">
  <div class="container">
    <h2 id="postes-t">Postes ouverts</h2>
    <div class="job-list">
      <article class="job reveal">
        <p class="job__unit">NCIEC Services</p><div class="job__head"><span class="job__icon">${icon('sparkle')}</span><h3>Agent d’entretien (H/F) — CDI</h3></div>
        <ul class="job__meta" role="list">
          <li>Entrée immédiate</li><li>Permis B requis</li><li>Français exigé</li><li>${ph('Temps plein ou partiel')}</li><li>${ph('Fourchette salariale')}</li>
        </ul>
        <a class="btn btn--outline btn--sm" href="#candidature" data-job="agent-entretien">Postuler${icon('arrow')}</a>
      </article>
      <article class="job reveal">
        <p class="job__unit">NCIEC Services</p><div class="job__head"><span class="job__icon">${icon('window')}</span><h3>Laveur de vitres (H/F) — CDI</h3></div>
        <ul class="job__meta" role="list">
          <li>Entrée immédiate</li><li>Permis B requis</li><li>Français exigé</li><li>${ph('Formation travaux en hauteur assurée en interne')}</li><li>${ph('Fourchette salariale')}</li>
        </ul>
        <a class="btn btn--outline btn--sm" href="#candidature" data-job="laveur-vitres">Postuler${icon('arrow')}</a>
      </article>
    </div>
  </div>
</section>

<section class="section section--tint" aria-labelledby="offre-t">
  <div class="container split">
    <div class="split__text">
      ${eyebrow('Vos avantages')}
      <h2 id="offre-t">Ce que nous proposons</h2>
      ${checklist(['Contrat à durée indéterminée dès l’embauche', 'Planning communiqué à l’avance, secteur géographique respecté', 'Formation à la prise de poste et matériel fourni', 'Évolution possible vers chef d’équipe ou responsable de site'])}
    </div>
    <div class="split__media reveal"><img src="/assets/img/gestion-dechets.webp" alt="Deux agents NCIEC souriants en tenue haute visibilité" loading="lazy" decoding="async"></div>
  </div>
</section>

<section class="section" id="candidature" aria-labelledby="cand-t">
  <div class="container narrow">
    ${eyebrow('Candidature spontanée')}
    <h2 id="cand-t">Déposer ma candidature</h2>
    <p class="lead">Nous recrutons régulièrement en dehors des offres publiées. Le formulaire complet prend environ ${ph('8')} minutes — ou envoyez simplement votre CV, nous vous rappelons.</p>

    <div class="tabs" role="tablist" aria-label="Type de candidature">
      <button role="tab" id="tab-full" aria-controls="panel-full" aria-selected="true" data-tab>Formulaire complet · 3 étapes</button>
      <button role="tab" id="tab-cv" aria-controls="panel-cv" aria-selected="false" tabindex="-1" data-tab>CV seul · 1 minute</button>
    </div>

    <div class="form-card" role="tabpanel" id="panel-full" aria-labelledby="tab-full">
      <form class="form" data-stepper novalidate>
        <div class="progress" aria-hidden="true"><span class="progress__bar" data-progress></span></div>
        <p class="progress__label" data-progress-label aria-live="polite">Étape 1 sur 3 · Identité et contact</p>

        <fieldset class="step" data-step="1" data-title="Identité et contact">
          <legend class="sr-only">Identité et contact</legend>
          <div class="field-grid">
            <div class="field"><label for="c-prenom">Prénom</label><input id="c-prenom" name="prenom" autocomplete="given-name" required></div>
            <div class="field"><label for="c-nom">Nom</label><input id="c-nom" name="nom" autocomplete="family-name" required></div>
            <div class="field"><label for="c-tel">Téléphone</label><input id="c-tel" name="tel" type="tel" autocomplete="tel" required></div>
            <div class="field"><label for="c-mail">E-mail <span class="opt">(facultatif)</span></label><input id="c-mail" name="email" type="email" autocomplete="email"></div>
            <div class="field"><label for="c-pays">Pays de résidence</label>
              <select id="c-pays" name="pays" required><option value="">Choisir…</option><option>Luxembourg</option><option>France</option><option>Belgique</option><option>Allemagne</option><option>Autre</option></select></div>
            <div class="field"><label for="c-loc">Localité</label><input id="c-loc" name="localite" autocomplete="address-level2" required></div>
          </div>
        </fieldset>

        <fieldset class="step" data-step="2" data-title="Disponibilités et mobilité" hidden>
          <legend class="sr-only">Disponibilités et mobilité</legend>
          <div class="field-grid">
            <div class="field"><label for="c-poste">Poste souhaité</label>
              <select id="c-poste" name="poste" required><option value="">Choisir…</option><option value="agent-entretien">Agent d’entretien</option><option value="laveur-vitres">Laveur de vitres</option><option value="electro">NCIEC Electro — vente, livraison, installation</option><option value="spontanee">Autre / candidature spontanée</option></select></div>
            <div class="field"><label for="c-date">Disponible à partir du</label><input id="c-date" name="disponibilite" type="date"></div>
          </div>
          <div class="field"><span class="field__label">Temps de travail</span>${radio('temps', [['plein', 'Temps plein'], ['partiel', 'Temps partiel'], ['indifferent', 'Indifférent']], true)}</div>
          <div class="field"><span class="field__label">Jours possibles <span class="opt">(facultatif)</span></span><div class="choice-row">${days.map((d) => `<label class="choice choice--sm"><input type="checkbox" name="jours" value="${d}"><span>${d}</span></label>`).join('')}</div></div>
          <div class="field"><span class="field__label">Créneaux possibles <span class="opt">(facultatif)</span></span><div class="choice-row">${shifts.map((s) => `<label class="choice"><input type="checkbox" name="creneaux" value="${s}"><span>${s}</span></label>`).join('')}</div></div>
          <div class="field-grid">
            <div class="field"><span class="field__label">Permis B</span>${radio('permis', [['oui', 'Oui'], ['non', 'Non']], true)}</div>
            <div class="field"><span class="field__label">Véhicule personnel</span>${radio('vehicule', [['oui', 'Oui'], ['non', 'Non']])}</div>
            <div class="field"><label for="c-auth">Autorisation de travail au Luxembourg</label>
              <select id="c-auth" name="autorisation"><option value="">Choisir…</option><option>Oui</option><option>En cours</option><option>Non</option></select></div>
            <div class="field"><label for="c-secteur">Secteur géographique souhaité <span class="opt">(facultatif)</span></label><input id="c-secteur" name="secteur" placeholder="ex. Luxembourg-Ville, Esch-sur-Alzette"></div>
          </div>
        </fieldset>

        <fieldset class="step" data-step="3" data-title="Compétences et documents" hidden>
          <legend class="sr-only">Compétences et documents</legend>
          <div class="field"><span class="field__label">Langues — niveau global <span class="opt">(facultatif sauf français)</span></span>
            <div class="lang-grid">${langs.map(([k, l]) => `<label for="c-l-${k}">${l}</label><select id="c-l-${k}" name="langue-${k}"${k === 'fr' ? ' required' : ''}><option value="">—</option><option>Notions</option><option>Courant</option><option>Langue maternelle</option></select>`).join('')}</div>
          </div>
          <div class="field"><label for="c-exp">Expérience dans le nettoyage</label>
            <select id="c-exp" name="experience"><option value="">Choisir…</option><option>Aucune, je débute</option><option>Moins de 2 ans</option><option>2 à 5 ans</option><option>Plus de 5 ans</option></select></div>
          <div class="field"><label for="c-msg">Quelques mots sur vous <span class="opt">(facultatif)</span></label><textarea id="c-msg" name="message" rows="4"></textarea></div>
          <div class="field"><label for="c-cv">CV <span class="opt">(facultatif — PDF, Word ou photo, 5 Mo max.)</span></label><input id="c-cv" name="cv" type="file" accept=".pdf,.doc,.docx,image/*" class="file"></div>
          <label class="consent"><input type="checkbox" name="rgpd" required><span>J’accepte que mes données soient utilisées pour traiter ma candidature, conformément à la <a href="/rgpd/">politique de protection des données</a>.</span></label>
        </fieldset>

        <div class="form__nav">
          <button type="button" class="btn btn--outline" data-prev hidden>Retour</button>
          <button type="button" class="btn btn--primary" data-next>Continuer${icon('arrow')}</button>
          <button type="submit" class="btn btn--primary" data-submit hidden>Envoyer ma candidature${icon('arrow')}</button>
        </div>
        <div class="form__success" data-success hidden tabindex="-1">${icon('check')}<div><strong>Merci, votre candidature est bien arrivée.</strong><p>Nous vous rappelons dans les prochains jours ouvrés.</p></div></div>
      </form>
    </div>

    <div class="form-card" role="tabpanel" id="panel-cv" aria-labelledby="tab-cv" hidden>
      <form class="form" data-simple-form novalidate>
        <div class="field-grid">
          <div class="field"><label for="x-nom">Nom et prénom</label><input id="x-nom" name="nom" autocomplete="name" required></div>
          <div class="field"><label for="x-tel">Téléphone</label><input id="x-tel" name="tel" type="tel" autocomplete="tel" required></div>
        </div>
        <div class="field"><label for="x-cv">CV <span class="opt">(PDF, Word ou photo)</span></label><input id="x-cv" name="cv" type="file" accept=".pdf,.doc,.docx,image/*" class="file" required></div>
        <label class="consent"><input type="checkbox" name="rgpd" required><span>J’accepte que mes données soient utilisées pour traiter ma candidature (<a href="/rgpd/">en savoir plus</a>).</span></label>
        <div class="form__nav"><button type="submit" class="btn btn--primary">Envoyer mon CV${icon('arrow')}</button></div>
        <div class="form__success" data-success hidden tabindex="-1">${icon('check')}<div><strong>CV reçu, merci.</strong><p>Nous vous rappelons pour compléter votre profil par téléphone.</p></div></div>
      </form>
    </div>
  </div>
</section>
`,
};
