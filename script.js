document.getElementById('menu-toggle').addEventListener('click', function() {
      this.classList.toggle('active');
      const nav = document.getElementById('nav-links');
      nav.classList.toggle('active');
    });

window.addEventListener('click', function(event) {
      const nav = document.getElementById('nav-links');
      const menuToggle = document.getElementById('menu-toggle');
      if (!menuToggle.contains(event.target) && !nav.contains(event.target)) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      }
    });

const menuLinks = document.querySelectorAll('nav a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        document.getElementById('menu-toggle').classList.remove('active');
        document.getElementById('nav-links').classList.remove('active');
      });
    });

  const sections = document.querySelectorAll('.fade-in');

function checkVisibility() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('DOMContentLoaded', checkVisibility);
window.addEventListener('scroll', checkVisibility);
