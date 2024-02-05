'use strict'

console.log("peticiones AJAX")
document.addEventListener("DOMContentLoaded",generateUser)


// FAKE API
    /**
     * https://randomuser.me/api/
     */

generateUser();

function generateUser(){
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            let user = data.results[0]
            console.log(user)

            
            document.getElementById('user-image').src=user.picture.large
           
            document.getElementById('name-user').innerText =` ${user.name.first} ${user.name.last}`
            

            document.getElementById('edad-user').innerText = `${user.dob.age} años`

            document.getElementById('address-user').innerText = `${user.location.street.name} Street, 
            ${user.location.city}`

            document.getElementById('state-user').innerText = `${user.location.state}, ${user.location.country}`

        })
        .catch(error => {
            console.log("error al cargar el usuario")
            document.querySelector('#user-info').style.display = 'none'

            let aviso = document.querySelector('#error')

            aviso.innerHTML = "Error al cargar el usuario" + "<br>" + "<br>" 
        })


    

    
}

