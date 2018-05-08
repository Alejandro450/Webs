// UNA CONTASTANTE QUE NO CAMBIARA DE INFORMACION	
var teclas = { UP: 38,DOWN: 40,LEFT: 37,RIGHT: 39};
//posicion inicial Punto Centro del canvas
var x = 250;
var y = 250;

function init() {
	
	myCanvas = document.getElementById('myCanvas');
	lienzo= myCanvas.getContext("2d");
	document.addEventListener("keyup",dibujarTeclado,false);
	

}


function dibujarLinea(color,inicioX,inicioY,finalX,finalY,lienzo){

	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth=2;
	lienzo.moveTo(inicioX,inicioY);
	lienzo.lineTo(finalX,finalY);
	lienzo.stroke();
	lienzo.closePath();

}


function dibujarTeclado(e){

	var colorDibujo = "black";
	var movimiento = 20;

	switch(e.keyCode)
	{
		case teclas.UP:
			dibujarLinea(colorDibujo,x,y,x,y-movimiento,lienzo);
				y = y - movimiento;
			break;

		case teclas.DOWN:
			dibujarLinea(colorDibujo,x,y,x,y+movimiento,lienzo);
				y = y + movimiento;
			break;

		case teclas.LEFT:
				dibujarLinea(colorDibujo,x,y,x-movimiento,y,lienzo);
				x = x - movimiento;
			break;

		case teclas.RIGHT:
			dibujarLinea(colorDibujo,x,y,x+movimiento,y,lienzo);
				x = x + movimiento;
			break;
	}

}


window.addEventListener('load',init,false);