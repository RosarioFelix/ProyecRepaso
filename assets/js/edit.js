window.onload=function(){
	document.getElementsByTagName("form")[0].onsubmit=function(e){
		e.preventDefault();
	}
	var datos= JSON.parse(localStorage.getItem("nuevoDate"));
	var editar = document.getElementsByClassName("edit");
	editar[0].value = datos.name;
	editar[1].value = datos.lastName;
	editar[2].value = datos.email;
	editar[3].value = datos.passw;


  document.getElementsByTagName("button")[0].addEventListener("click",function(){
		if(editar[0].length!=0 && editar[1].length!=0 && editar[2].length!=0 && editar[3].length!=0){
			datos.name=editar[0].value;
			datos.lastName= editar[1].value;
			datos.email = editar[2].value;
			datos.passw= editar[3].value;

			localStorage.setItem("nuevoDate",JSON.stringify(datos));
			window.location="mostrar.html"
		}
		else{

			alert("Todos los campos son obligatorios");
		}
	})
};
