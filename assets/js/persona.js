window.onload=function(){
	var name = document.getElementById("name1");
	var lastName= document.getElementById("lastName1");
	var email= document.getElementById("email1");
	var passw= document.getElementById("passw1");


	var objetoDatos= JSON.parse(localStorage.getItem("nuevoDate"));

	name.innerText=objetoDatos.name;
	lastName.innerText=objetoDatos.lastName;
  email.innerText=objetoDatos.email;
	passw.innerText=objetoDatos.passw;


  function Datos(name,lastName,email,passw){
    this.name=name;
    this.lastName=lastName;
    this.email=email;
    this.passw=passw;
	};

	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		window.location="editar.html"
	})
};
