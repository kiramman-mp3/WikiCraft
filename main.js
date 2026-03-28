import { initNewsSection } from './controllers/NewsController.js';
import { initUIHelpers } from './controllers/UIController.js';

document.addEventListener('DOMContentLoaded', () => {
  initUIHelpers();
  // Only init news if the container exists
  if (document.getElementById('minecraft-news')) {
    initNewsSection();
  }

  // Layout Reveal Helper
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));
});
