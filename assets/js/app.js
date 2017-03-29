//validaciones
window.onload=function(){
  document.getElementById("formDos").onsubmit=function(e){
		e.preventDefault();
	}
function Datos(nombre,apellido,correo,contraseña){
  this.name=nombre;
  this.lastName=apellido;
  this.email=correo;
  this.passw=contraseña;
};

arrDatitos = [];

  var botoni = document.getElementById('register');
  botoni.addEventListener("click",function () {
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById("email").value;
    var pasaw = document.getElementById("password").value;
    if(name.length!=0 && lastName.length!=0 && email.length!=0 &&
      passw.length!=0 ){
        arrDatitos.push(new Datos(name, lastName, email, passw));
        creandoDiv(arrDatitos);
			  document.getElementById("formDos").reset()
      }else{
			var incompleto = document.getElementById("incompleto");
			incompleto.innerText = "Todos los campos son obligatorios"
		}
  });
  function creandoDiv(datito){
  var contenedor = document.getElementById("div-contenedor");
  contenedor.innerHTML="";
  for(var i = 0; i < datito.length; i++){
    var contenedorDatos = document.createElement("div");
    contenedorDatos.classList.add("informacion");
    for (var prop in datito[i]) {
      var dato = document.createElement("p");
      dato.innerHTML= prop + " : " + datito[i][prop];
      contenedorDatos.appendChild(dato);
    }
    contenedor.appendChild(contenedorDatos);
  }
}

var names = document.getElementById("name");
var lastNames = document.getElementById("lastName");

var letras = function(e){
  var codigo = e.keyCode;
  if((codigo>=97 && codigo<=122) || (codigo>=65 && codigo<=90)|| codigo==39 || codigo == 32){
			this.nextElementSibling.nextElementSibling.innerText = "";
			return true;
    }else{
      this.nextElementSibling.nextElementSibling.innerText = "Este campo permite letras"
    return false;
  }
}
names.onkeypress=letras;
lastNames.onkeypress=letras;
    }
