import { renderStories } from '../controllers/Comunity.js';

// Historias de ejemplo — puedes cambiarlas por contenido real o cargarlas desde una API en el futuro
const communityStories = [
  {
    title: "Jugador recrea la Tierra en escala 1:1",
    image: "https://www.minecraft.net/content/dam/community/en-us/community-content/recreation-earth.jpg",
    summary: "Un proyecto masivo que replica continentes, océanos y hasta biomas reales, con increíble detalle geográfico.",
    url: "https://www.minecraft.net/en-us/article/building-earth"
  },
  {
    title: "Ciudad Steampunk construida en modo supervivencia",
    image: "https://www.minecraft.net/content/dam/community/en-us/community-content/steampunk-city.jpg",
    summary: "Una ciudad llena de engranajes y vapor que llevó meses construir, toda hecha sin comandos ni mods.",
    url: "https://www.minecraft.net/en-us/article/community-city-steampunk"
  },
  {
    title: "Una historia de redención con aldeanos",
    image: "https://i.redd.it/some-example-image.jpg", // Reemplaza por una imagen real si lo deseas
    summary: "Después de una tragedia, un jugador reconstruye su aldea y narra cómo recuperó a cada aldeano.",
    url: "https://www.reddit.com/r/Minecraft/comments/example/"
  },
  {
    title: "Mazmorra automática con redstone y pistones",
    image: "https://www.minecraft.net/content/dam/community/en-us/community-content/redstone-trap.jpg",
    summary: "Una trampa letal hecha con redstone y sensores que parece sacada de una película de aventuras.",
    url: "https://www.minecraft.net/en-us/article/community-dungeon-design"
  }
];

renderStories(communityStories, 'community-stories');
