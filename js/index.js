// Nav background on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(26, 26, 46, 0.95)';
  } else {
    nav.style.background = 'rgba(26, 26, 46, 0.7)';
  }
});
