import { renderStories } from '../controllers/Comunity.js';

const communityStories = [
    {
      title: "La Acropolis te necesita, heroe",
      image: "../images/comunidad/Acropolis.png", // FUNCIONA
      summary: "Los jugadores de la comunidad crearán un servidor survival para que la gente pueda unirse.",
      url: "https://www.reddit.com/r/minecraftespanol/comments/1ke5erg/la_acr%C3%B3polis_te_necesita_h%C3%A9roe_estamos_lanzando/"
    },
    {
      title: "Ciudad Steampunk en Supervivencia",
      image: "https://i.imgur.com/Hh2ysod.jpeg", // FUNCIONA
      summary: "Una ciudad inspirada en vaporpunk, construida sin comandos ni mods.",
      url: "https://www.minecraft.net/en-us/article/community-city-steampunk"
    },
    {
      title: "Fiesta en El End con el Dragón",
      image: "https://i.imgur.com/xFuTOHR.jpeg", // FUNCIONA
      summary: "Una fiesta improvisada en el End... sí, con el dragón incluido.",
      url: "https://www.minecraft.net/en-us/article/discover-realms-stories"
    },
    {
      title: "Mi aldea fue destruida, pero la reconstruí mejor",
      image: "https://i.imgur.com/oTlfBts.jpeg", // FUNCIONA
      summary: "Un relato sobre perderlo todo en Minecraft y volver más fuerte, junto a los aldeanos.",
      url: "https://www.reddit.com/r/Minecraft/comments/15pazwp/i_rebuilt_my_entire_village/"
    },
    {
      title: "¿Tu mejor noche en Minecraft?",
      image: "https://i.imgur.com/gF5ZVCk.jpeg", // FUNCIONA
      summary: "Jugadores recuerdan esas primeras noches llenas de miedo, cuevas y creatividad.",
      url: "https://www.reddit.com/r/Minecraft/comments/2k7hva/what_are_your_best_minecraft_stories/"
    }
  ];

renderStories(communityStories, 'community-stories');
