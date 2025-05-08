
    // le menu sur tel
    document.getElementById('menu-toggle').addEventListener('click', function() {
      this.classList.toggle('active');
      const nav = document.getElementById('nav-links');
      nav.classList.toggle('active');
    });

    // fermer le menu quand tu click a coté
    window.addEventListener('click', function(event) {
      const nav = document.getElementById('nav-links');
      const menuToggle = document.getElementById('menu-toggle');
      if (!menuToggle.contains(event.target) && !nav.contains(event.target)) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      }
    });

    // fermer menu quand click sur un titre
    const menuLinks = document.querySelectorAll('nav a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        document.getElementById('menu-toggle').classList.remove('active');
        document.getElementById('nav-links').classList.remove('active');
      });
    });

  //  animation quand scroll legacy
  //  const sections = document.querySelectorAll('.fade-in');
  //  window.addEventListener('scroll', () => {
  //    sections.forEach(section => {
  //      if (section.getBoundingClientRect().top < window.innerHeight) {
  //        section.classList.add('visible');
  //      }
  //     });
  //   });

const sections = document.querySelectorAll('.fade-in');

function checkVisibility() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      section.classList.add('visible');
    }
  });
}

// Lancer une première vérif au chargement
window.addEventListener('DOMContentLoaded', checkVisibility);

// Puis continuer à checker au scroll
window.addEventListener('scroll', checkVisibility);