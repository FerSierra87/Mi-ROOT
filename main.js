// entregable


let nombre = prompt(" Ingresa tu nombre")
let apellido = prompt(" Ingresa apellido")


function suTurno(nombre, apellido){

return nombre +" "+ apellido; 
    
}

//ARRAY
/*
const servicio = ["","Manos", "Pies","Rostro"];
let serv= servicio.length;


for( let i=1; i<serv; i+=1){
    Text += "<li>" + servicio[i] + "</li>";
     //const servicio=prompt("Ingresa el servicio");
    if(servicio=="esc"){
        break;
        
    }
     alert(" Su turno es "+ i + " Nombre: " + suTurno(nombre, apellido) + " para el servicio: " + servicio[i]);
} 


let dato= prompt(" Desea agregar algo más?");
while(dato!= "esc"){
    alert(" Usted a ingresado " + dato);
    dato=prompt(" Ingresar otro dato? de lo contrario digite esc");
}
*/

 //Desafio interactuando con HTML - DOM
 

 const titulo = document.getElementsByClassName ("encabezado");
 console.log(titulo);

 console.log(titulo[0].innerText)
 console.log(titulo[0].innerHTML)

 titulo[0].innerText = "Cambio el titulo"

 titulo[0].className = " otraClase"

 const enlace = document.createElement('a')
 enlace.textContent = "Nuevo"
 enlace.href = "../index.html"
 enlace.classList.add('enlace')

 

 //Evento- entregable

 const formulario = document.getElementById('form')

 formulario.addEventListener('submit', function(e){

    e.preventDefault()
     let mail = document.getElementById('email-form').value
     console.log(mail)
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

}


 









