/* NCIEC — UI strings used by scripts, per page language (<html lang>) */
const NCIEC_LANG = (document.documentElement.lang || 'fr').slice(0, 2);
const NCIEC_I18N = {
  fr: {
    radio: 'Merci de choisir une option.', checkbox: 'Merci de cocher cette case pour continuer.', file: 'Merci de joindre un fichier.',
    required: 'Ce champ est obligatoire.', email: 'Adresse e-mail invalide.', invalid: 'Valeur invalide.',
    step: (n, total, title, left) => `Étape ${n} sur ${total} · ${title}${left ? ` — encore ${left} étape${left > 1 ? 's' : ''}` : ''}`,
    redirect: 'Redirection vers',
    objets: {
      'visite-sur-site': 'Je souhaite planifier une visite sur site.', 'diagnostic-sol': 'Je souhaite un diagnostic de sol.',
      robots: 'Je souhaite savoir si notre site se prête aux robots de nettoyage.', 'travaux-en-hauteur': 'Je souhaite planifier une intervention en hauteur.',
      'service-hiver': 'Je souhaite réserver un contrat service hiver.', 'diagnostic-facade': 'Je souhaite un diagnostic de façade.',
    },
  },
  en: {
    radio: 'Please choose an option.', checkbox: 'Please tick this box to continue.', file: 'Please attach a file.',
    required: 'This field is required.', email: 'Invalid email address.', invalid: 'Invalid value.',
    step: (n, total, title, left) => `Step ${n} of ${total} · ${title}${left ? ` — ${left} more step${left > 1 ? 's' : ''}` : ''}`,
    redirect: 'Redirecting to',
    objets: {
      'visite-sur-site': 'I would like to schedule a site visit.', 'diagnostic-sol': 'I would like a floor assessment.',
      robots: 'I would like to know whether our site is suitable for cleaning robots.', 'travaux-en-hauteur': 'I would like to schedule work at height.',
      'service-hiver': 'I would like to book a winter service contract.', 'diagnostic-facade': 'I would like a façade assessment.',
    },
  },
  de: {
    radio: 'Bitte wählen Sie eine Option.', checkbox: 'Bitte setzen Sie dieses Häkchen, um fortzufahren.', file: 'Bitte fügen Sie eine Datei bei.',
    required: 'Dieses Feld ist erforderlich.', email: 'Ungültige E-Mail-Adresse.', invalid: 'Ungültiger Wert.',
    step: (n, total, title, left) => `Schritt ${n} von ${total} · ${title}${left ? ` – noch ${left} Schritt${left > 1 ? 'e' : ''}` : ''}`,
    redirect: 'Weiterleitung zu',
    objets: {
      'visite-sur-site': 'Ich möchte eine Besichtigung vor Ort vereinbaren.', 'diagnostic-sol': 'Ich möchte eine Bodenanalyse.',
      robots: 'Ich möchte wissen, ob sich unser Standort für Reinigungsroboter eignet.', 'travaux-en-hauteur': 'Ich möchte Arbeiten in der Höhe planen.',
      'service-hiver': 'Ich möchte einen Winterdienstvertrag reservieren.', 'diagnostic-facade': 'Ich möchte eine Fassadenanalyse.',
    },
  },
};
const T = NCIEC_I18N[NCIEC_LANG] || NCIEC_I18N.fr;

/* NCIEC Services — front-end behaviour (no dependencies) */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- header: scrolled state ---------- */
  const header = $('[data-header]');
  // Collapsing the top bar changes the header height; the gap between the two thresholds
  // stops that height change from toggling the state back and forth (page jitter).
  const onScroll = () => {
    if (!header) return;
    if (scrollY > 80) header.classList.add('is-scrolled');
    else if (scrollY < 10) header.classList.remove('is-scrolled');
  };
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });

  /* ---------- mobile menu ---------- */
  const burger = $('[data-burger]');
  const nav = $('[data-mainnav]');
  const setMenu = (open) => {
    burger?.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('is-open', open);
    header?.classList.toggle('is-menu-open', open);
    document.body.classList.toggle('nav-open', open);
  };
  burger?.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));

  /* ---------- mega menu (click / keyboard; hover handled in CSS) ---------- */
  const megaBtn = $('[data-mega-toggle]');
  const megaLi = megaBtn?.closest('.has-mega');
  const setMega = (open) => { megaBtn?.setAttribute('aria-expanded', String(open)); megaLi?.classList.toggle('is-open', open); };
  megaBtn?.addEventListener('click', (e) => { e.stopPropagation(); setMega(megaBtn.getAttribute('aria-expanded') !== 'true'); });
  document.addEventListener('click', (e) => { if (megaLi && !megaLi.contains(e.target) && innerWidth > 1080) setMega(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (megaLi?.classList.contains('is-open')) { setMega(false); megaBtn.focus(); }
    if (nav?.classList.contains('is-open')) { setMenu(false); burger.focus(); }
  });
  megaLi?.addEventListener('focusout', (e) => { if (!megaLi.contains(e.relatedTarget) && innerWidth > 1080) setMega(false); });

  /* ---------- hero video ---------- */
  const video = $('.hero__video');
  const vBtn = $('[data-video-toggle]');
  if (video) {
    const conn = navigator.connection || {};
    const small = matchMedia('(max-width: 760px)').matches || conn.saveData || /2g/.test(conn.effectiveType || '');
    const setPaused = (p) => vBtn?.setAttribute('aria-pressed', String(p));
    if (!reduceMotion) {
      const src = document.createElement('source');
      src.src = small ? video.dataset.srcMobile : video.dataset.srcDesktop;
      src.type = 'video/mp4';
      video.appendChild(src);
      video.load();
      video.play().catch(() => setPaused(true));
    } else {
      setPaused(true);
    }
    vBtn?.addEventListener('click', () => {
      if (!video.querySelector('source')) {
        const src = document.createElement('source');
        src.src = small ? video.dataset.srcMobile : video.dataset.srcDesktop;
        src.type = 'video/mp4';
        video.appendChild(src);
        video.load();
      }
      if (video.paused) { video.play(); setPaused(false); } else { video.pause(); setPaused(true); }
    });
    // Don't burn CPU/bandwidth when the hero is off-screen.
    new IntersectionObserver(([e]) => {
      if (vBtn?.getAttribute('aria-pressed') === 'true') return;
      e.isIntersecting ? video.play().catch(() => {}) : video.pause();
    }).observe(video);
  }

  /* ---------- reveal on scroll ---------- */
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 80}ms`; io.observe(el); });
  } else reveals.forEach((el) => el.classList.add('is-visible'));

  /* ---------- in-page TOC active state ---------- */
  const tocLinks = $$('.toc a');
  if (tocLinks.length) {
    const map = new Map(tocLinks.map((a) => [a.hash.slice(1), a]));
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      tocLinks.forEach((a) => a.classList.remove('is-active'));
      const a = map.get(e.target.id);
      a?.classList.add('is-active');
      // Keep the active tab visible by scrolling the bar sideways only.
      // (scrollIntoView would also scroll the page and fight the user's wheel/touch scrolling.)
      const bar = a?.closest('.toc__inner');
      if (bar && bar.scrollWidth > bar.clientWidth) {
        bar.scrollTo({ left: a.offsetLeft - (bar.clientWidth - a.offsetWidth) / 2, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    }), { rootMargin: '-40% 0px -55% 0px' });
    map.forEach((_, id) => { const s = document.getElementById(id); s && io.observe(s); });
  }

  /* ---------- form validation ---------- */
  const clearError = (el) => {
    // Errors are always inserted right after the consent label, the choice row, or the control itself.
    const anchor = el.closest('.consent') || el.closest('.choice-row') || el;
    if (anchor.nextElementSibling?.classList.contains('field__error')) anchor.nextElementSibling.remove();
    el.classList.remove('is-invalid');
    el.closest('.choice-row')?.classList.remove('is-invalid');
    el.closest('.consent')?.classList.remove('is-invalid');
  };
  const message = (el) => {
    if (el.validity.valueMissing) {
      if (el.type === 'radio') return T.radio;
      if (el.type === 'checkbox') return T.checkbox;
      if (el.type === 'file') return T.file;
      return T.required;
    }
    if (el.validity.typeMismatch && el.type === 'email') return T.email;
    return T.invalid;
  };
  function validate(scope) {
    let firstBad = null;
    const seenRadio = new Set();
    $$('input, select, textarea', scope).forEach((el) => {
      if (el.type === 'radio') {
        if (seenRadio.has(el.name)) return;
        seenRadio.add(el.name);
        const group = $$(`input[name="${el.name}"]`, scope);
        if (!group.some((r) => r.required)) return;
        group.forEach(clearError);
        if (!group.some((r) => r.checked)) {
          const row = el.closest('.choice-row');
          row.classList.add('is-invalid');
          row.insertAdjacentHTML('afterend', `<p class="field__error">${message(el)}</p>`);
          firstBad ??= el;
        }
        return;
      }
      clearError(el);
      if (el.checkValidity()) return;
      el.classList.add('is-invalid');
      el.setAttribute('aria-invalid', 'true');
      const consent = el.closest('.consent');
      if (consent) consent.classList.add('is-invalid');
      (consent || el).insertAdjacentHTML('afterend', `<p class="field__error">${message(el)}</p>`);
      firstBad ??= el;
    });
    firstBad?.focus();
    return !firstBad;
  }
  document.addEventListener('input', (e) => { if (e.target.matches('.is-invalid, .choice input, .consent input')) { clearError(e.target); e.target.removeAttribute('aria-invalid'); } });
  document.addEventListener('change', (e) => { if (e.target.matches('input[type="radio"], input[type="checkbox"]')) clearError(e.target); });

  const showSuccess = (form) => {
    // Front-end only: no backend yet. Replace with a fetch() to the form endpoint.
    form.classList.add('is-sent');
    const ok = $('[data-success]', form);
    ok.hidden = false;
    ok.focus();
  };

  $$('[data-simple-form]').forEach((form) => form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate(form)) showSuccess(form);
  }));

  /* ---------- quote form: prefill from ?prestation=&objet= ---------- */
  const quote = $('[data-quote-form]');
  if (quote) {
    const params = new URLSearchParams(location.search);
    const sel = $('select[name="prestation"]', quote);
    const p = params.get('prestation');
    if (p && [...sel.options].some((o) => o.value === p)) {
      sel.value = p;
      $('[data-prefill-hint]', quote).hidden = false;
      if (p === 'particuliers') { const r = $('input[name="profil"][value="particulier"]', quote); if (r) r.checked = true; }
    }
    const OBJETS = T.objets;
    const o = params.get('objet');
    const msg = $('textarea[name="message"]', quote);
    if (o && OBJETS[o] && !msg.value) msg.value = OBJETS[o] + '\n\n';
  }

  /* ---------- careers: tabs ---------- */
  const tabs = $$('[data-tab]');
  const selectTab = (t) => {
    tabs.forEach((x) => {
      const on = x === t;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => selectTab(t));
    t.addEventListener('keydown', (e) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
      const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      selectTab(n); n.focus();
    });
  });

  /* ---------- careers: 3-step form ---------- */
  const stepper = $('[data-stepper]');
  if (stepper) {
    const steps = $$('[data-step]', stepper);
    const prev = $('[data-prev]', stepper);
    const next = $('[data-next]', stepper);
    const submit = $('[data-submit]', stepper);
    const bar = $('[data-progress]', stepper);
    const label = $('[data-progress-label]', stepper);
    let i = 0;
    const show = (n, focus = true) => {
      i = n;
      steps.forEach((s, k) => { s.hidden = k !== i; });
      prev.hidden = i === 0;
      next.hidden = i === steps.length - 1;
      submit.hidden = i !== steps.length - 1;
      bar.style.width = `${((i + 1) / steps.length) * 100}%`;
      const left = steps.length - 1 - i;
      label.textContent = T.step(i + 1, steps.length, steps[i].dataset.title, left);
      if (focus) steps[i].querySelector('input, select, textarea')?.focus();
    };
    next.addEventListener('click', () => { if (validate(steps[i])) show(i + 1); });
    prev.addEventListener('click', () => show(i - 1));
    stepper.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validate(steps[i])) showSuccess(stepper);
    });
    show(0, false);

    // "Postuler" on a job card preselects the position.
    $$('[data-job]').forEach((a) => a.addEventListener('click', () => {
      const s = $('select[name="poste"]', stepper);
      if (s) s.value = a.dataset.job;
      selectTab(tabs[0]);
    }));
  }

  /* ---------- misc ---------- */
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();

/* ---------- landing: door cards → animated redirect ---------- */
(() => {
  const doors = document.querySelectorAll('[data-door]');
  if (!doors.length) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  doors.forEach((door) => door.addEventListener('click', (e) => {
    // Let the browser handle new-tab / new-window clicks and reduced motion.
    if (reduce || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();

    const tone = door.dataset.doorTone;
    const card = (door.closest('.unit') || door).getBoundingClientRect();
    // Keyboard activation reports 0/0 — start from the card centre instead.
    const x = e.clientX || card.left + card.width / 2;
    const y = e.clientY || card.top + card.height / 2;

    const portal = document.createElement('div');
    portal.className = `door-portal door-portal--${tone}`;
    portal.setAttribute('role', 'status');
    portal.style.setProperty('--x', `${x}px`);
    portal.style.setProperty('--y', `${y}px`);
    portal.innerHTML = `<div class="door-portal__inner">
      <svg viewBox="0 0 391 139" aria-hidden="true"><use href="#logo-${tone}"/></svg>
      <p>${T.redirect}<strong>${door.dataset.doorDomain}</strong></p>
      <span class="door-portal__bar"></span>
    </div>`;
    document.body.appendChild(portal);
    requestAnimationFrame(() => requestAnimationFrame(() => portal.classList.add('is-open')));
    setTimeout(() => { location.href = door.href; }, 900);
  }));

  // Coming back with the browser's Back button restores the page from cache: remove the overlay.
  addEventListener('pageshow', () => document.querySelectorAll('.door-portal').forEach((p) => p.remove()));
})();

/* ---------- client logo carousel: pause / play ---------- */
document.querySelectorAll('[data-clients]').forEach((box) => {
  const btn = box.querySelector('[data-clients-toggle]');
  btn?.addEventListener('click', () => {
    const paused = !box.hasAttribute('data-paused');
    box.toggleAttribute('data-paused', paused);
    btn.setAttribute('aria-pressed', String(paused));
  });
});
