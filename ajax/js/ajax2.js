'use strict'

console.log('Peticiones AJAX')

var usuarios = []
var divUsuarios = document.querySelector('#usuarios');
var divUsuario = document.querySelector('#usuario');

var numUsuario = 2

// FAKE API
//https://reqres.in/api/users

realizarPeticionTodosUsuarios()
    .then(data => data.json())
    .then(users => {
        pintarUsuarios(users.data)
        return realizarPeticionUsuario(numUsuario)
    })
    .then(datosUsuarios => datosUsuarios.json())
    .then(usuario => {
        pintarUsuario(usuario.data)
    })

function realizarPeticionTodosUsuarios(){

    // realizar la peticion
    return fetch('https://reqres.in/api/users');

}

function realizarPeticionUsuario(nuser){

    // realizar la peticion
    return fetch('https://reqres.in/api/users/'+ `${nuser}`);

}

function pintarUsuarios(usuarios){
    usuarios.map(function(user,i){
        
        let nombre = document.createElement('h3')
        nombre.innerHTML = i + " - " + user.first_name + " " + user.last_name;

        divUsuarios.appendChild(nombre)

        document.querySelector('.cargando1').style.display = 'none'
    })
}

function pintarUsuario(usuario){
    let nombre = document.createElement('h3')
    nombre.innerHTML = usuario.first_name + " " + usuario.last_name;

    divUsuarios.appendChild(nombre)

    document.querySelector('.cargando2').style.display = 'none'
}

//-----------------------CAPTURAR ERRORES CON CATCH ---------------------------//

peticionErronea()
    .then(data => data.json())
    .catch(error => {
        alert("peticion erronea")
    })
function peticionErronea(){
    return fetch('http://reqres.in')
}