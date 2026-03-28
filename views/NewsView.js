export function renderNews(articles, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  // Determine the path for the default image based on current page location
  const isSubPage = window.location.pathname.includes('/views/');
  const defaultImagePath = isSubPage ? '../images/default-new.jpg' : 'images/default-new.jpg';

  articles.slice(0, 9).forEach(article => {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    col.innerHTML = `
        <div class="news-card h-100">
          <img src="${article.urlToImage || defaultImagePath}" class="news-card-img" alt="Imagen noticia">
          <div class="news-card-body">
            <div class="news-card-meta">${article.date || ''}</div>
            <h5 class="news-card-title">${article.title}</h5>
            <p class="news-card-text">${article.description}</p>
            <a href="${article.url}" target="_blank" class="btn-minecraft mt-auto" style="text-align: center;">Leer más</a>
          </div>
        </div>
      `;
    container.appendChild(col);
  });
}
