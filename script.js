document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Simple language toggle (EN/BG)
const langToggle = document.querySelector('.lang-toggle');
const bodyEl = document.body;

function setLang(lang) {
  const isBg = lang === 'bg';
  bodyEl.classList.toggle('bg', isBg);
  bodyEl.setAttribute('data-lang', isBg ? 'bg' : 'en');
  if (langToggle) langToggle.textContent = isBg ? 'EN' : 'BG';
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const next = bodyEl.classList.contains('bg') ? 'en' : 'bg';
    setLang(next);
  });
}

setLang(bodyEl.getAttribute('data-lang') || 'en');
