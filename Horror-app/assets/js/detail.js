'use strict'

import { sidebar } from "./sidebar.js";
import { api_key, secureUrl, fetchDatos, detailUrl } from "./api.js";

$(document).ready(function(){

    const movieId = window.localStorage.getItem("movieId");
    console.log(movieId)

    const pageContent = document.querySelector("[contenido]");
    const genreId = 27;
    const imgUrl = 'https://image.tmdb.org/t/p/';
    const movieDetail = $('#movie-detail');

    sidebar();

    const getGenres = function (genreList) {
        const newGenreList = [];

        for (const { name } of genreList) newGenreList.push(name);
        return newGenreList.join(", ");
    };

    const getCasts = function(castList) {
        const newCastList = [];

        for(const {name} of castList) newCastList.push(name);
        return newCastList.join(", ");
    };

    const getDirectors = function(crewList) {
        const directors = crewList.filter(({job}) => job === 'Director');

        const directorList=[];

        for(const {name} of directors) directorList.push(name);
        return directorList.join(", ");
    };

    // fetch('https://api.themoviedb.org/3/movie/866398?append_to_response=casts&language=en-US', options)


        fetchDatos(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=casts,videos,images,releases`,
            function (movie) {
                const {
                    backdrop_path,
                    poster_path,
                    title,
                    release_date,
                    runtime,
                    vote_average,
                    genres,
                    overview,
                    casts: {cast, crew},
                } = movie;

                const movieDetails = `
                    <div 
                    class="backdrop-image"
                    style="background-image: url('${imgUrl}${"w1280" || "original"
                    }${backdrop_path || poster_path}')">
                    </div>

                    <figure class="poster-box movie-poster">
                        <img 
                            src="${imgUrl}w342${poster_path}" 
                            alt="${title} poster" 
                            class="img-cover" />
                    </figure>
                    <div class="detail-box">
                    <div class="detail-content">
                        <h1 class="heading">${title}</h1>
                
                        <div class="meta-list">
                            <div class="meta-item">
                                <img 
                                src="assets/img/star.png" 
                                width="20"
                                height="20" />
                                <span class="span">${vote_average}</span>
                            </div>
                
                            <div class="separator"></div>
                
                            <div class="meta-item">${runtime}m</div>
                
                            <div class="separator"></div>
                
                            <div class="meta-item">${release_date}</div>
                        </div>
                
                        <p class="genre">${getGenres(genres)}</p>
                
                        <p class="resena">${overview}</p>
                
                        <ul class="detail-list">
                            <div class="list-item">
                                <p class="list-name">Reparto</p>
                                <p>
                                    ${getCasts(cast)}
                                </p>            
                            </div>
                
                            <div class="list-item">
                                <p class="list-name">Director</p>
                                <p>
                                    ${getDirectors(crew)}
                                </p>
                            </div>    
                        </ul>
                    </div>
                
                    <div class="title-wrapper">
                        <h3 class="title-large">Trailer</h3>
                    </div>
                
                    <div class="slider-list">
                        <div class="slider-inner"></div>
                    </div>
                </div>
                `;
                
                movieDetail.append(movieDetails);
                
                });


      

   























})