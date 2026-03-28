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
        <div class="card h-100 shadow-sm">
          <img src="${article.urlToImage || defaultImagePath}" class="card-img-top" alt="Imagen noticia" style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${article.title}</h5>
            <div class="mb-2 text-muted small">${article.date || ''}</div>
            <p class="card-text">${article.description}</p>
            <a href="${article.url}" target="_blank" class="btn btn-minecraft mt-auto">Leer más</a>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  }
  