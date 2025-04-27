import { fetchMinecraftNews } from '../models/NewsModel.js';
import { renderNews } from '../views/NewsView.js';

export async function initNewsSection() {
  const apiKey = '8a284961d32a4ae1b7911fd8831c59aa';
  try {
    const articles = await fetchMinecraftNews(apiKey);
    renderNews(articles, 'minecraft-news');
  } catch (error) {
    console.error('Error cargando las noticias:', error);
  }
}
