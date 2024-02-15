'use strict'

import { sidebar } from "./sidebar.js";
import { api_key, secureUrl, fetchDatos  } from "./api.js";


$(document).ready(function() {

  const pageContent = document.querySelector("[contenido]");
  const genreId = 27;
  const imgUrl = 'https://image.tmdb.org/t/p/';

  sidebar();
  // fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&with_genres=27', options)


  $.get(secureUrl, {
    api_key:api_key,
    with_genres : genreId,
    language :'es-ES'
  }, function(data){

    const movieCard = `<div class="movie-card">
    <figure class="poster-box card-banner">
      <img src="${posterPath}" alt="${title}" class="img-cover">
    </figure>

    <h4 class="title">${title}</h4>

    <div class="meta-list">
      <div class="meta-item">
        <img src="assets/img/star.png" width="20" height="20" alt="rating" loading="lazy">
        <span class="span">${rating}</span>
      </div>

      <div class="card-badge">${year}</div>
    </div>

    <a href="detalles.html" class="card-btn" title="${title}"></a>
  </div>`;

  


    


  })



})













