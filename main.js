import { initNewsSection } from './controllers/NewsController.js';
import { initUIHelpers } from './controllers/UIController.js';

document.addEventListener('DOMContentLoaded', () => {
  initUIHelpers();
  // Only init news if the container exists
  if (document.getElementById('minecraft-news')) {
    initNewsSection();
  }
});
