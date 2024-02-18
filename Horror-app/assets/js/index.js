'use strict'

import { sidebar } from "./sidebar.js";
import { api_key, secureUrl, imageBaseURL, fetchDatos } from "./api.js";


$(document).ready(function() {

  const language = 'es-ES';
  const with_genres = 27;
  const contenido = document.querySelector('[contenido]');

  sidebar();

  //secciones
  const Secciones = [
    {
      titulo: 'Novedades',
      path: '/movie/upcoming',
    },
    {
      titulo: 'Populares en esta semana',
      path: '/trending/movie/week'
    },
    {
      titulo: 'Mejor valorados',
      path: '/movie/top_rated',
    },
  ];



  fetchDatos(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}?language=${language}&with_genres=${with_genres}`,
    hero
  );

});
















