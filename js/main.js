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

/* El formulario de HubSpot trae su propio logo, título y párrafo de marca
   antes de los campos (contenido configurado dentro del formulario en
   HubSpot, no editable desde aquí). Saltamos esa parte al cargar para que
   se vean los campos directamente; el usuario puede subir el scroll del
   recuadro si quiere ver el encabezado. */
const hsContainer = document.querySelector('.hs-form-container');
if (hsContainer) {
  const SKIP_PX = 430;
  let attempts = 0;
  const skipIntro = setInterval(() => {
    attempts++;
    if (hsContainer.scrollTop < SKIP_PX) {
      hsContainer.scrollTop = SKIP_PX;
    }
    if (attempts >= 10) clearInterval(skipIntro);
  }, 300);
}
