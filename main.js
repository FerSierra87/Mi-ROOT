

 //Desafio interactuando con HTML - DOM
 

 const titulo = document.getElementsByClassName ("encabezado");
 console.log(titulo);


 



 const enlace = document.createElement('a')
 enlace.textContent = "Nuevo"
 enlace.href = "../index.html"
 enlace.classList.add('enlace')

 

 //Evento- entregable

 /*const formulario = document.getElementById('form')

 formulario.addEventListener('submit', function(e){

    e.preventDefault()
     let mail = document.getElementById('email-form').value
     console.log(mail)
 })

 

 */
let contrasena = document.getElementById('pass')
let boton = document.getElementById('boton')


boton.addEventListener('click', mostrarContraseña)

function mostrarContraseña(){
    if(
        contrasena.type == "password"){
            contrasena.type = "text"
            boton.src = "../img/ocultar.png"
        } else {
            contrasena.type = "password"
            boton.src = "../img/mostrar.png"

        }

}


function ingresado(){


    let usuario = document.getElementById ('username').value;
    let correo = document.getElementById ('email-form').value;
    let contrasena = document.getElementById('pass').value;
    let user = {
        usuario: username,
        correo: mail-form,
        contrasena: pass,
    }

    let json = JSON.stringify(user)
    localStorage.setItem(username, json)
    console.log('usuario agregado')
}

 

function loginFunc(e){



    let usuario = document.getElementById ('username').value;
    let correo = document.getElementById ('email-form').value;
    let contrasena = document.getElementById('pass').value;
    let resultado = document.getElementById('result')

    let user = localStorage.getItem(user)
    let data = JSON.parse(user)
    console.log(data)

    if (user==null){
        result.innerHTML = "Usuario incorrecto"
    } else if(user==data.username && pass == data.password){
        result.innerHTML = "Logeado"
    }else{
        result.innerHTML = "Contraseña incorrecta"
    }

    
}







