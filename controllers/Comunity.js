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
      <div class="story-card card h-100 shadow-sm" style="background-color: rgba(30, 29, 28, 0.8); border: 1px solid rgba(255, 255, 255, 0.1);">
        <img src="${image}" class="card-img-top" alt="Imagen historia" style="height: 220px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title text-white">${title}</h5>
          <p class="card-text text-white-50 small">${summary.length > 120 ? summary.substring(0, 120) + '...' : summary}</p>
          <a href="${url}" target="_blank" class="btn btn-minecraft mt-auto">Leer historia</a>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}
