'use strict'

//--------------------------------PETICIONES  AJAX EN JQUERY------------------------------

$(document).ready(function(){
    console.log('ficheros cargados correctamente')    
    
    // -----------------CARGAR AJAX--------------------


    //Load -- https://reqres.in/api/users   DOCUMENTOS COMPLETOS
    var datos = $("#datos");
    
    //---------------METODO GET----------------------- PEDIR DATOS DE LA API
    /*$.get("https://reqres.in/api/users",{page:2},function(response){
        console.log(response)

        //el response es un json para leerlo podemos usar un foreach
        response.data.forEach(element => {
            $(datos).append('<br>' + element.first_name + " "+ element.last_name + '<br>')
        });
    }) */

    //--------------METODO POST ---------------------- SUBIR DATOS A LA API
        //creamos lo que queremos subir, el obj json
        var usuario = {
            "first_name": "Rocio",
            "last_name": "Ramirez" 
        }
    
  /*  $.post("https://reqres.in/api/users",usuario,function(response){
        console.log(response)
    }).done(function(){ 
        alert("usuario añadido correctamente")
    })  */



    // Otra forma de hacer peticiones AJAX---------------

    $.ajax({
        type:'POST',
            url:'https://reqres.in/api/users',
        data: usuario,
        beforeSend: function(){
            console.log('Enviando usuario...')
        },
        success: function(){
            console.log('usuario añadido correctamente');
            console.log(usuario)
        },
        error: function(){
            console.log('error al añadir usuario');
        },
        timeout: 1000 //ms
        
    });
});