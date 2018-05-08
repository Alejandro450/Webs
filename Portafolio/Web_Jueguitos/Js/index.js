function init() {
	
	alert("Bienvenido a Jueguitos.com \nRegistrate Primero");


	var btn_onSending = document.getElementById('btn_onSending');
	var txt_user = document.getElementById('txt_user');

	btn_onSending.addEventListener("click",cargamePagina,false);

}
function cargamePagina(){

	alert("Bienvenido " + txt_user.value);
	window.location ="Juegos.html"
}


window.addEventListener('load',init,false);