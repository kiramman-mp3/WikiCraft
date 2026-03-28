import { renderStories } from '../controllers/Comunity.js';
import { fetchMinecraftNews } from '../models/NewsModel.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Show a loading indicator if needed
    const container = document.getElementById('community-stories');
    if (container) {
        container.innerHTML = '<div class="col-12 text-center text-white"><p>Cargando historias de la comunidad...</p></div>';
    }

    try {
        // Fetch from the Spanish Minecraft community
        const stories = await fetchMinecraftNews('minecraftespanol');
        
        if (stories.length === 0) {
            // Fallback to a different subreddit if Spanish is empty
            const backupStories = await fetchMinecraftNews('minecraft');
            renderStories(backupStories, 'community-stories');
        } else {
            renderStories(stories, 'community-stories');
        }
    } catch (error) {
        console.error("Error loading community stories:", error);
    }
});
