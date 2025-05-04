import { renderStories } from '../controllers/Comunity.js';

const communityStories = [
    {
      title: "La Acropolis te necesita, heroe",
      image: "../images/comunidad/Acropolis.png", // FUNCIONA
      summary: "Los jugadores de la comunidad crearán un servidor survival para que la gente pueda unirse.",
      url: "https://www.reddit.com/r/minecraftespanol/comments/1ke5erg/la_acr%C3%B3polis_te_necesita_h%C3%A9roe_estamos_lanzando/"
    },
    {
      title: "Builders/constructores para Network Minecraft",
      image: "../images/comunidad/minenet.webp", // FUNCIONA
      summary: "Se buscan builders creativos para un proyecto anónimo en desarrollo, se ofrece un apartado para aplicar a este proyecto.",
      url: "https://www.reddit.com/r/minecraftespanol/comments/1kc8u3c/buildersconstructores_para_network_minecraft/"
    },
    {
      title: "Que es mejor Minecraft dongeons o Minecraft legends",
      image: "../images/comunidad/dungeon.webp", // FUNCIONA
      summary: "Los jugadores discuten sobre cuál juego en su opinion es mejor.",
      url: "https://www.reddit.com/r/minecraftespanol/comments/1kb3pjj/que_es_mejor_minecraft_dongeons_o_minecraft/"
    },
    {
      title: "Acabe Mi jardin Por fin ahora ya tengo casa",
      image: "../images/comunidad/jardin.webp", // FUNCIONA
      summary: "Usuarios comparten avances en sus construcciones y en sus mundos.",
      url: "https://www.reddit.com/r/minecraftespanol/comments/1k8vamj/acabe_mi_jardin_por_fin_ahora_ya_tengo_casa_y/"
    },
    {
      title: "I made the Happy Ghast out of carboard",
      image: "../images/comunidad/ghast.webp", // FUNCIONA
      summary: "Los usuarios comparten manualidades que han hecho sobre el juego.",
      url: "https://www.reddit.com/r/Minecraft/comments/1kdp0v5/i_made_the_happy_ghast_out_of_carboard/"
    }
  ];

renderStories(communityStories, 'community-stories');
