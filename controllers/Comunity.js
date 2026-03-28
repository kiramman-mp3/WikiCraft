export function renderStories(stories, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  stories.forEach(story => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';

    const title = story.title || 'Inspiración Minecraft';
    const image = story.urlToImage || story.image || '../images/default-story.jpg';
    const summary = story.description || story.summary || 'Descubre esta increíble creación de la comunidad.';
    const url = story.url || '#';

    col.innerHTML = `
      <div class="news-card h-100 d-flex flex-column">
        <div class="position-relative">
          <img src="${image}" class="news-card-img" alt="Relato">
          <div class="news-card-meta position-absolute top-0 end-0 m-3 px-2 py-1 bg-dark bg-opacity-75 rounded small">Comunidad</div>
        </div>
        <div class="news-card-body d-flex flex-column flex-grow-1 p-4">
          <h5 class="news-card-title mb-3" style="color: var(--mc-gold);">${title}</h5>
          <p class="news-card-text small mb-4 opacity-75">${summary}</p>
          <a href="${url}" target="_blank" class="btn-minecraft mt-auto w-100 text-center text-decoration-none">Ver en Reddit</a>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}
