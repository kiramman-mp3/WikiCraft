import { initNewsSection } from './controllers/newscontroller.js';
import { initUIHelpers } from './controllers/uicontroller.js';

document.addEventListener('DOMContentLoaded', () => {
  initUIHelpers();
  // Only init news if the container exists
  if (document.getElementById('minecraft-news')) {
    initNewsSection();
  }
});
