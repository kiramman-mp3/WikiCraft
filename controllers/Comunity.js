export function renderStories(stories, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  stories.forEach(story => {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    // Handle both hardcoded and dynamic data fields
    const title = story.title || 'Sin título';
    const image = story.urlToImage || story.image || '../images/default-story.jpg';
    const summary = story.description || story.summary || '';
    const url = story.url || '#';

    col.innerHTML = `
      <div class="news-card h-100">
        <img src="${image}" class="news-card-img" alt="Imagen historia">
        <div class="news-card-body">
          <div class="news-card-meta">Comunidad</div>
          <h5 class="news-card-title">${title}</h5>
          <p class="news-card-text">${summary}</p>
          <a href="${url}" target="_blank" class="btn-minecraft mt-auto" style="text-align: center;">Leer historia</a>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}
