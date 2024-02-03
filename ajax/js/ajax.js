'use strict'

console.log("Peticiones AJAX")

var usuarios = [];
var divUsuarios = document.querySelector('#usuarios');

//FAKE API 1

//https://jsonplaceholder.typicode.com/users

//PETICION ASINCRONA

 /*   fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json().then(data => {
            usuarios = data
            console.log('Datos',usuarios)
        })) */

// FAKE API 2

//https://reqres.in/api/users

fetch('https://reqres.in/api/users')
        .then(function(data){
            return data.json()
        })
        .then(users => {
            usuarios = users.data
            console.log('datos',usuarios)



            // la mostramos en la pantalla mapenado la informacion
            usuarios.map(function(user,i){

                //creamos el elemento para mostrar la informacion
                let element = document.createElement('h3')

                element.innerHTML = i + " - " + user.first_name + " " + user.last_name
                divUsuarios.appendChild(element)

                document.querySelector('.cargando').style.display='none'
            })


        })


//-------------------------------------ENCADENAR PROMESAS ---------------------------------------//

// console.log("Peticiones AJAX")

// var usuarios = [];
// var divUsuarios = document.getElementById("#usuarios");

// realizarPeticionTodosUsuarios()
//         .then(data => data.json())  // obtiene los datos a traves de una funcion 
//         .then (users => {
//             pintarUsuario(users.data)
//         })

// function realizarPeticionTodosUsuarios(){
    
//     //realizar la peticion
//     return fetch('https://reqres.in/api/users')
// }

// function pintarUsuario(usuarios){
    
//     usuarios.map(function(user,i){

//         //creamos el elemento para mostrar la informacion
//         let nombre = document.createElement('h3');
//         nombre.innerHTML = i + " - " + user.first_name + " " + user.last_name;

//         divUsuarios.appendChild(nombre)
        
//         document.querySelector('.cargando').style.display='none'
    
//     })




// }