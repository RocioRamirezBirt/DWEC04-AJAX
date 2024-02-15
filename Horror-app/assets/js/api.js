'use strict'
var api_key = '55ff10c1c71c95fef4cb770e49b9cd8f';
var secureUrl = 'https://api.themoviedb.org/3/discover/movie';

/**
 * fetch
 */

// const parametros = {
//     async: true,
//     crossDomain: true,
//     url: 'https://api.themoviedb.org/3/configuration',
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWZmMTBjMWM3MWM5NWZlZjRjYjc3MGU0OWI5Y2Q4ZiIsInN1YiI6IjY1Y2M5ZThkMjU4ODIzMDE3ZGE2ZmJlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yR5Vvd93CsKOsLxj0rnGDinzTHBfqws1Qhgwmm7XEXc'
//     }
//   };
  

const fetchDatos = function(url,callback, parametros){
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data,parametros))
}


  export {secureUrl, api_key, fetchDatos};