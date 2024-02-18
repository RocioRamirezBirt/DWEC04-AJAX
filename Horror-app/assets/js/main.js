'use strict'


/*
* ===========  FUNCTIONES ========================
*/

const addEventOnElements = function(elements, eventType, callback) {
     for(const elem of elements) 
     elem.addEventListener(eventType,callback);
}


/*
* ===========  MAIN ========================
*

    /*
* ===========  EVENTOS EN BUSCAR SMALL==========
*/

    console.log('ficheros cargados')

    const searchBox = $("[container-search]");
    const toggler = $("[search-toggler]");

    toggler.on("click",function(){
        searchBox.toggleClass("active")
    })


    const getMovieDetail = function (movieId) {
        window.localStorage.setItem("movieId", String(movieId));
      };







    


