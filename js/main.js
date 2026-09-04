/* Traducción ES/EN */
const translations = {
  es: {
    'page-title': 'Estrella Insurance 375 | Seguros con Descuento en Brandon, FL',
    'page-description': 'Estrella Insurance 375 en Brandon, FL. Ahorra en tu seguro de auto, hogar y más. Agente: Daniel Geraldino. Llama (813) 656-9375.',
    'lang-toggle-label': 'EN',
    'badge': 'Agencia local en Brandon, FL',
    'hero-h1': 'Ahorra en tu seguro con <span class="accent">descuento</span> real.',
    'hero-sub': 'Comparamos aseguradoras para darte la tarifa más baja en auto, hogar, negocio y más. Rápido, fácil y en español.',
    'stat-1': 'Agentes licenciados',
    'stat-2': '+40 años de experiencia',
    'stat-3': 'Atención en español e inglés',
    'stat-4': 'Cobertura el mismo día',
    'trust-title': '¿Por qué elegir Estrella Insurance 375?',
    'trust-1-title': 'Agentes licenciados en Brandon',
    'trust-1-text': 'Entienden los requisitos de seguros de tu zona y te asesoran con conocimiento local.',
    'trust-2-title': 'Comparamos aseguradoras al instante',
    'trust-2-text': 'Capacidad de cotizar con múltiples compañías a la vez, sin que tengas que hacerlo tú mismo.',
    'trust-3-title': 'Explicaciones claras, sin presión',
    'trust-3-text': 'Te mostramos las opciones de forma honesta, para que decidas con confianza.',
    'trust-4-title': 'Tarifas con descuento a tu medida',
    'trust-4-text': 'Aplicamos todos los descuentos disponibles según tu situación específica.',
    'trust-5-title': 'Atención rápida, el mismo día',
    'trust-5-text': 'Cobertura de auto, inquilinos y motocicleta desde el momento en que se aprueba.',
    'trust-6-title': 'Apoyo de tu comunidad local',
    'trust-6-text': 'Un equipo que vive y trabaja en Brandon, no un call center a distancia.',
    'reviews-heading': '5.0 en Google (3 reseñas)',
    'exp-title': 'Décadas de experiencia nacional respaldando tu oficina local',
    'exp-text': 'Estrella Insurance ha servido a millones de familias en todo el país con coberturas económicas, con descuento y al mejor precio.',
    'form-eyebrow': 'Empieza a ahorrar',
    'form-title': 'Cotización gratis',
    'privacy-text': 'Tus datos están protegidos.',
    'privacy-link': 'Política de privacidad',
    'fast-response': 'Respuesta rápida garantizada.'
  },
  en: {
    'page-title': 'Estrella Insurance 375 | Discount Insurance in Brandon, FL',
    'page-description': 'Estrella Insurance 375 in Brandon, FL. Save on auto, home insurance and more. Agent: Daniel Geraldino. Call (813) 656-9375.',
    'lang-toggle-label': 'ES',
    'badge': 'Local agency in Brandon, FL',
    'hero-h1': 'Save on your insurance with real <span class="accent">discounts</span>.',
    'hero-sub': 'We compare carriers to get you the lowest rate on auto, home, business and more. Fast, easy, and bilingual service.',
    'stat-1': 'Licensed agents',
    'stat-2': '+40 years of experience',
    'stat-3': 'Service in English and Spanish',
    'stat-4': 'Same-day coverage',
    'trust-title': 'Why choose Estrella Insurance 375?',
    'trust-1-title': 'Licensed agents in Brandon',
    'trust-1-text': 'They understand local insurance requirements and guide you with local expertise.',
    'trust-2-title': 'We compare carriers instantly',
    'trust-2-text': 'Ability to get quotes from multiple companies at once, without doing it yourself.',
    'trust-3-title': 'Clear explanations, no pressure',
    'trust-3-text': 'We show you your options honestly, so you can decide with confidence.',
    'trust-4-title': 'Discounted rates tailored to you',
    'trust-4-text': 'We apply every available discount based on your specific situation.',
    'trust-5-title': 'Fast, same-day service',
    'trust-5-text': 'Auto, renters and motorcycle coverage can start right after approval.',
    'trust-6-title': 'Local community support',
    'trust-6-text': 'A team that lives and works in Brandon, not a distant call center.',
    'reviews-heading': '5.0 on Google (3 reviews)',
    'exp-title': 'Decades of National Experience Backing Your Local Office',
    'exp-text': 'Estrella Insurance has served millions of families nationwide with low-cost, discounted, best-price coverage.',
    'form-eyebrow': 'Start Saving',
    'form-title': 'Free Quote',
    'privacy-text': 'Your information is protected.',
    'privacy-link': 'Privacy Policy',
    'fast-response': 'Fast response guaranteed.'
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  document.title = dict['page-title'];
  const metaDesc = document.getElementById('pageDescription');
  if (metaDesc) metaDesc.setAttribute('content', dict['page-description']);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  try { localStorage.setItem('estrella_lang', lang); } catch (e) {}
}

const langGate = document.getElementById('langGate');
const langToggle = document.getElementById('langToggle');

let savedLang = null;
try { savedLang = localStorage.getItem('estrella_lang'); } catch (e) {}

if (savedLang === 'es' || savedLang === 'en') {
  applyLanguage(savedLang);
  if (langGate) langGate.remove();
} else {
  applyLanguage('es');
}

if (langGate) {
  langGate.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang'));
      langGate.classList.add('is-hidden');
      setTimeout(() => langGate.remove(), 300);
    });
  });
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const current = document.documentElement.lang === 'en' ? 'en' : 'es';
    applyLanguage(current === 'es' ? 'en' : 'es');
  });
}

const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
}
