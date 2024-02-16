'use strict'

import { sidebar } from "./sidebar.js";
import { api_key, secureUrl, fetchDatos } from "./api.js";


$(document).ready(function() {

      const pageContent = document.querySelector("[contenido]");
      const genreId = 27;
      const imgUrl = 'https://image.tmdb.org/t/p/';
      const movieGrid = $('#movie-grid');
      let page = 1;

      sidebar();
      // fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&with_genres=27', options)

      $.get(secureUrl, {
          api_key:api_key,
          with_genres : genreId,
          language :'es-ES',
        }, function(data){

          data.results.forEach(function(movie){

            const moviePoster = `${imgUrl}w500${movie.poster_path}`;
            const movieTitle = movie.title;
            const movieRating = movie.vote_average;
            const movieDate = movie.release_date;
            const movieId = movie.id;

            const movieCard = `
          <div class="movie-card">
            <figure class="poster-box card-banner">
              <img src="${moviePoster}" alt="${movieTitle}" class="img-cover">
            </figure>

            <h4 class="title">${movieTitle}</h4>

            <div class="meta-list">
              <div class="meta-item">
                  <img src="assets/img/star.png" width="20" height="20" alt="rating" loading="lazy">
                  
                  <span class="span">${movieRating}</span>
              </div>

              <div class="card-badge">${movieDate.split("-")[0]}</div>
          </div>

          <a href="detalles.html" class="card-btn" title="${movieTitle} onclick="getMovie(${movieId})"></a>
        </div>`;

        function getMovie(movieId){
          localStorage.setItem('id',movieId);
  
          window.location.href ="./detalles.html"
        }

        movieGrid.append(movieCard);
        });

      });
         
      function cargasPelis() {

        $.get(secureUrl, {
          api_key:api_key,
          with_genres : genreId,
          language :'es-ES',
          page: page+1
        }, function(data){

          data.results.forEach(function(movie){

            const moviePoster = `${imgUrl}w500${movie.poster_path}`;
            const movieTitle = movie.title;
            const movieRating = movie.vote_average;
            const movieDate = movie.release_date;

            const movieCard = `
          <div class="movie-card">
            <figure class="poster-box card-banner">
              <img src="${moviePoster}" alt="${movieTitle}" class="img-cover">
            </figure>

            <h4 class="title">${movieTitle}</h4>

            <div class="meta-list">
              <div class="meta-item">
                  <img src="assets/img/star.png" width="20" height="20" alt="rating" loading="lazy">
                  
                  <span class="span">${movieRating}</span>
              </div>

              <div class="card-badge">${movieDate.split("-")[0]}</div>
          </div>

          <a href="detalles.html" class="card-btn" title="${movieTitle}"></a>
        </div>`;

        movieGrid.append(movieCard);
        });

        page++;

        });
      }    
      
      $('.mas').on('click',function(){
        cargasPelis();
      });

  




  });














