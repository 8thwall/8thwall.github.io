if (typeof window !== 'undefined') {
  const SCROLL_THRESHOLD = 10;

  function updateNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('navbar--scrolled', window.scrollY > SCROLL_THRESHOLD);
    }
  }

  function setHeaderHeight() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      document.documentElement.style.setProperty('--header-height', navbar.offsetHeight + 'px');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  window.addEventListener('resize', setHeaderHeight);
  window.addEventListener('DOMContentLoaded', () => { updateNavbar(); requestAnimationFrame(setHeaderHeight); });
  updateNavbar();
  requestAnimationFrame(setHeaderHeight);
}
