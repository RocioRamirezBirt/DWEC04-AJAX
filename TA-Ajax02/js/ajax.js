'use strict'

console.log('Peticiones AJAX JQuery')

var datos
var url = 'https://randomuser.me/api/'

// FAKE API
    /**
     * https://randomuser.me/api/
     */

////////////////////FUNCIONES////////////////////////////////////////



function generateUser(){

    return new Promise (function(resolve,reject) {
        $.ajax({
            url:url,
            success: function(data) {
                console.log('Pidiendo datos..')
                resolve(data)
            },
            error: function(error) {
                
                reject(error)
            }
        })
    })

}

function pintarUsuario(user){

    document.getElementById('user-img').src=user.picture.large
    if(user.gender === 'male'){
        document.getElementById('user-info').style.background = '#586F7C'
        document.getElementById('btn-user').style.background= '#1CA9C9'
    }else if(user.gender === 'female'){
        document.getElementById('user-info').style.background = '#FF69B4'
        document.getElementById('btn-user').style.background= '#FFE4E1'
    }else{
        document.getElementById('user-info').style.background = '#04724D'
    }
    
    document.getElementById('name-user').innerText = `${user.name.first}`
    document.getElementById('edad-user').innerText = `${user.dob.age} años`
    document.getElementById('address-user').innerText = `${user.location.street.name} Street, ${user.location.city}`
    document.getElementById('state-user').innerText = `${user.location.state}, ${user.location.country}`



}


////////////////////MAIN////////////////////////////////////////

$(document).ready(function(){

    generateUser()
        .then(function(data){
            let user = data.results[0]
            console.log(user)
            pintarUsuario(user)   
        })
        .catch(error => {
            console.log('error al cargar al usuario...')

        //quitar la parte de la informacion del usuario
        document.querySelector('#user-info').style.display = "none";

        //poner el error
        let aviso = document.querySelector('#error')

        aviso.innerHTML = "Error al cargar el usuario..." + "<br>" + "<br>"
        })



})




















