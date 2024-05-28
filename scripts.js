document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  const menu = document.querySelector('.menu');

  mobileMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});

// Smooth scroll functionality for the scroll-down arrow
document.querySelector('.scroll-down').addEventListener('click', function(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth'
  });
});
