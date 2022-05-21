

 //Desafio interactuando con HTML - DOM
 

 const titulo = document.getElementsByClassName ("encabezado");
 console.log(titulo);


 



 const enlace = document.createElement('a')
 enlace.textContent = "Nuevo"
 enlace.href = "../index.html"
 enlace.classList.add('enlace')

 

 //Evento- entregable

 const formulario = document.getElementById('logeado')

 formulario.addEventListener('submit', function(e){

    e.preventDefault()
     let nombre = document.getElementById('username').value
     console.log(nombre)

     Swal.fire({
        icon: 'success',
        title: 'Tu mensaje fue enviado',
        text: 'Pronto recibiras información',
        timer: 2000
        
      })
 })

 

 
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
j
}


function ingresado(){


    let usuario = document.getElementById ('username').value;
    let correo = document.getElementById ('correo').value;
    let contrasena = document.getElementById('pass').value;
    let user = {
        usuario: username,
        correo: correo,
        contrasena: pass,
    }
    
   
    let json = JSON.stringify(user)
    localStorage.setItem(user, json)
    console.log('usuario agregado')


    
}

 

function loginFunc(){

    const form = document.getElementById('logearse')

    form.addEventListener('submit', function(a){
   
       a.preventDefault()
        let nombre = document.getElementById('name').value
        console.log(nombre)
    })

    let usuario = document.getElementById ('name').value;
    let correo = document.getElementById ('correo').value;
    let contrasena = document.getElementById('pass').value;
    let resultado = document.getElementById('result')

   /* let user = localStorage.getItem(user)
    let data = JSON.parse(user)
   // console.log(data)

*/



    

    if (user==null){
        result.innerHTML = "Usuario incorrecto"
    } else if(user==data.username && pass == data.password){
        result.innerHTML = "Logeado"
    }else{
        result.innerHTML = "Contraseña incorrecta"
    }

    
}

// Desafio operadores avanzados

let user = {

    nombre: "Fernando",
    apellido: " Sierra"
}

let {nombre, apellido}=user

console.log(nombre)
console.log(apellido)

let user2 = {
    ...user
}
console.log(user2)


let user3 = {
    ...user,
    correo:"algo@algo",
    edad: 35
}

console.log(user3)

let user4 = null

    console.log(user3 || "Este usuario no existe")

    console.log(user3?.nombre?.JuanPedro || "Este nombre no existe")


    //LIBRERIAS sweet alert 
const enviar = document.querySelector('#enviar')

enviar.addEventListener('submit', ()=>{

    Swal.fire({
        icon: 'success',
        title: 'Tu mensaje fue enviado',
        text: 'Pronto recibiras información',
        timer: 2000
        
      })

})