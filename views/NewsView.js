export function renderNews(articles, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
  
    articles.slice(0, 9).forEach(article => {
      const col = document.createElement('div');
      col.className = 'col-md-4';
  
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${article.urlToImage || '../images/default-new.jpg'}" class="card-img-top" alt="Imagen noticia">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">${article.description ? article.description.substring(0, 100) + '...' : ''}</p>
            <a href="${article.url}" target="_blank" class="btn btn-minecraft mt-auto">Leer más</a>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  }
  