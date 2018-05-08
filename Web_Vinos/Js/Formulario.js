

function init() {
	btn_sending =document.getElementById('btn_sending');
	zonaEnvio = document.getElementById('zonaEnvio');

	btn_sending.addEventListener('click', onSending,false);
	
}
function onSending(argument) {

	txt_name = document.getElementById('txt_name').value;
	txt_surname = document.getElementById('txt_surname').value;
	txt_dni = document.getElementById('txt_dni').value;
	txt_area = document.getElementById('list_area').value;

	var formData = new FormData();
	formData.append('nombre',txt_name);
	formData.append('apellido',txt_surname);
	formData.append('dni',txt_dni); 
	formData.append('listaCompra',txt_area);

	var url ="procesar.php";
	var request = new XMLHttpRequest();

	request.addEventListener("load" , mostrar, false);
	request.open("POST",url,true);
	request.send(formData);
}

function mostrar(e) {

	zonaEnvio.innerHTML = e.target.responseText;
}

window.addEventListener('load',init,false);