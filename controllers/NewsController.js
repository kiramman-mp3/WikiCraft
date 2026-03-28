import { fetchMinecraftNews } from '../models/NewsModel.js';
import { renderNews } from '../views/NewsView.js';

export async function initNewsSection() {
  try {
    const articles = await fetchMinecraftNews();
    renderNews(articles, 'minecraft-news');
  } catch (error) {
    console.error('Error cargando las noticias:', error);
  }
}
