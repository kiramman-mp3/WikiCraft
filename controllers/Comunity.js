export function renderStories(stories, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Limpiar el contenido del contenedor

  stories.forEach(story => {
    const col = document.createElement('div');
    col.className = 'col-md-4'; // Para asegurarnos de que las cards se acomoden en 3 por fila

    col.innerHTML = `
      <div class="story-card card h-100 shadow-sm" style="background-color: rgba(30, 29, 28, 0.8);">
        <img src="${story.image || '../images/default-story.jpg'}" class="card-img-top" alt="Imagen historia">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${story.title}</h5>
          <p class="card-text">${story.summary ? story.summary.substring(0, 100) + '...' : ''}</p>
          <a href="${story.url}" target="_blank" class="btn btn-minecraft mt-auto">Leer historia</a>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}
