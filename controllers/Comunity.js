export function renderStories(stories, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
  
    stories.forEach(story => {
      const col = document.createElement('div');
      col.className = 'col';
  
      col.innerHTML = `
        <div class="story-card card h-100 position-relative">
          <img src="${story.image || '../images/default-story.jpg'}" class="card-img-top" alt="Imagen historia">
          <div class="card-body">
            <h5 class="card-title">${story.title}</h5>
            <p class="card-text">${story.summary?.substring(0, 100) || ''}...</p>
          </div>
          <a href="${story.url}" target="_blank" class="dialog-link">Leer historia</a>
        </div>
      `;
      container.appendChild(col);
    });
  }
  