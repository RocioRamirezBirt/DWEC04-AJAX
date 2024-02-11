'use strict'


/*
* ===========  FUNCTIONES ========================
*/

// const eventosEnElementos = function(elements, eventType, callback) {
//     for(const elem of elements) 
//     elem.addEventListener(eventType,callback);
// }


/*
* ===========  MAIN ========================
*/


$(document).ready(function(){

    /*
* ===========  EVENTOS EN BUSCAR SMALL==========
*/

    console.log('ficheros cargados')

    const searchBox = $("[container-search]");
    const toggler = $("[search-toggler]");

    toggler.on("click",function(){
        searchBox.toggleClass("active")
    })









    
})

