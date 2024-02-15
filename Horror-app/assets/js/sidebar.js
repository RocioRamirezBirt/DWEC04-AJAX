'use strict';

import { api_key, fetchDatos } from "./api.js";

export function sidebar() {
    const genreList = {};

    fetchDatos(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
    function({genres}){

        for(const {id, name} of genres){
            genreList[id] = name
        }

        genreLink();
    });

    const sidebarInner = document.createElement("div");
    sidebarInner.classList.add("sidebar-dentro");

    sidebarInner.innerHTML =`
    <div class = "sidebar-dentro">
    <div class="sidebar-lista">
    <p class="title">Tipos</p>
  </div>

  <div class="sidebar-footer">
    <p class="copyright">
      Copyright 2024 <a href="#">Velvet &copy</a>
    </p>

    <p class="tmdb">Support By: 
      <img src="assets/img/tmdb-logo.png" width="80" height="20" alt="tmdb logo">
    </p>
  </div>
  </div>
  `;

  const genreLink = function () {
    for(const [genreId, genreName] of Object.entries
        (genreList)){
            const link = document.createElement('a');
            link.classList.add('sidebar-link');
            link.setAttribute("href", "./movie-list.html");
            link.setAttribute("menu-close", "");
            link.setAttribute(
              "onclick", 
              `getMovieList("with_genres=${genreId}", "${genreName}")`);
            link.textContent = genreName;
            sidebarInner.querySelectorAll(".sidebar-lista")[0].appendChild(link)
    }

    const sidebar = document.querySelector('[sidebar]');

    sidebar.appendChild(sidebarInner);
    toggleSidebar(sidebar);
  }


  const toggleSidebar = function(sidebar) {

    const sidebarBtn = document.querySelector('[menu-btn]');

    const sidebarToggle = document.querySelectorAll('[menu-toggler]');
    const sidebarClose = document.querySelectorAll('[menu-close]');
    const overlay = document.querySelector('[overlay]');

    
    addEventOnElements(sidebarToggle,"click",function(){
        sidebar.classList.toggle('active');
        sidebarBtn.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    addEventOnElements(sidebarClose,"click",function(){
        sidebar.classList.remove('active');
        sidebarBtn.classList.remove('active');
        overlay.classList.remove('active');
    })



  }

    



    


}


