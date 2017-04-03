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
    var passw = document.getElementById("password").value;

    // validando todo el formulario y contraseña
        if(name.length==0 && lastName.length==0 && email.length==0 &&  passw.length==0) {
          var incompleto = document.getElementById("incompleto");
          incompleto.innerText = "Todos los campos son obligatorios"
        }else if(passw.length <=5 || passw.length >=21){
          var aqui = document.getElementById("aqui");
          aqui.innerText = "Contraseña debe tener entre 6 y 21 caracteres"
        }else if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(email)) {
          var aquiCero = document.getElementById("here")
          aquiCero.innerText = "Escriba correo : xxxx@xxxx.com"
        }else{
          console.log(new Datos(name, lastName, email, passw));
          localStorage.setItem("nuevoDate",JSON.stringify(new Datos(name, lastName, email, passw)));
          document.getElementById("formDos").reset()
           window.location ="mostrar.html"
        }
  });


  function creaDiv(datito){
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
};

names.onkeypress=letras;
lastNames.onkeypress=letras;
}
