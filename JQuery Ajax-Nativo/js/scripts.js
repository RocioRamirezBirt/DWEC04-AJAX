'use strict'

var datos
var country = 'canada'
var url = 'https://covid-api.com/api/docs/api-docs.json'


/*
function pedirDatosOpcionUno() {
    $.get(url, function(data,status) {
        //miramos si nos devuelve un sucess
        console.log('Pedir datos opcion 1')
        datos = data
    })
} */


function pedirDatosOpcionDos(){
    return new Promise (function (resolve, reject) {
        $.ajax({
            url: url,
            success: function(data) {
                console.log('Pedir datos opcion 2')
                
                // resuelve la promesa y va a el then de la funcion
                resolve(data)
            },
            error: function(error) {

                // resuelve la promesa y va a el catch de la funcion
                reject(error)
            }
        })
    })
}

function pintar(){
    console.log(datos)
 
}








/////////////////////////////MAIN/////////////////////////////

//----Cargar JQuery----/
$(document).ready(function(){

})

//pedirDatosOpcionUno();
//pintar()

pedirDatosOpcionDos()
    .then(function(data){
        datos = data
        console.log(datos)
        pintar()
    })
    .catch(function(err){
        console.log(err)
    })
