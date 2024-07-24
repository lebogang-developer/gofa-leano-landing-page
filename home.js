// Mobile Menu

document.addEventListener('DOMContentLoaded', () => {
  const hambugerButton = document.querySelector('.hambuger-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  document.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});
