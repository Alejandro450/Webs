var obtenerNumero; var limpiarCaja; var operacion = ""; var numAcc; var resultado; var sumando;
var restando; var multiplicando; var diviendiendo; var raizs; var inverse; var elevadocuadrado;
var elevateNum; var potencia_n2; var fact; var sumatorio_num; var prodc_num;


function init ()
{
  
  limpiarCaja = document.getElementById("limpiarCaja");
  obtenerNumero = document.getElementById("n1"); 
  resultado = document.getElementById("respuesta");
  sumando = document.getElementById("suma");
  restando = document.getElementById("resta");
  multiplicando = document.getElementById("multiplicacion");
  diviendiendo= document.getElementById("division");
  raizs=document.getElementById("raizCuadrada");
  inverse = document.getElementById("numInverso");
  elevadocuadrado= document.getElementById("elevadocuadrado");
  elevateNum= document.getElementById("elevadoUnNumero");
  potencia_n2 = document.getElementById("potencia_n_2");
  fact=document.getElementById("factorial");
  sumatorio_num = document.getElementById("suma_num");
  prodc_num = document.getElementById("produc_num");


  limpiarCaja.addEventListener("click",cleaning,false); 
  obtenerNumero.addEventListener("click",agregar2doNum,false);
  sumando.addEventListener("click",sumar,false);
  restando.addEventListener("click",restar,false);
  multiplicando.addEventListener("click",multiplicar,false);
  diviendiendo.addEventListener("click",dividir,false);
  raizs.addEventListener("click",raizCuadrada,false);
  inverse.addEventListener("click",inversaNum,false);
  elevadocuadrado.addEventListener("click",elevadocadro,false);
  elevateNum.addEventListener("click",elevapow,false);
  potencia_n2.addEventListener("click",pote_2,false);
  fact.addEventListener("click",factor,false);
  sumatorio_num.addEventListener("click",sum_num,false);
  produc_num.addEventListener("click",pro_nu,false);



  resultado.addEventListener("click",calcular,false);
  

}

function cleaning(){  obtenerNumero.value = "Nuevo Ejercicio";}
function agregar2doNum(){  obtenerNumero.value = "";}
function sumar(){    numAcc = obtenerNumero.value;     operacion = "+"; }
function restar(){  numAcc = obtenerNumero.value;  operacion = "-";}
function multiplicar(){  numAcc = obtenerNumero.value;  operacion = "*";}
function dividir(){   numAcc = obtenerNumero.value;  operacion = "/";}
function raizCuadrada(){  numAcc = obtenerNumero.value;  operacion = "raiz";}
function inversaNum(){  numAcc = obtenerNumero.value;  operacion = "inversa";}
function elevadocadro(){  numAcc = obtenerNumero.value;  operacion = "elevate";}
function elevapow(){  numAcc = obtenerNumero.value;  operacion = "elevatepo";}
function pote_2(){  numAcc= obtenerNumero.value;  operacion="pote_2";}
function factor(){  numAcc=obtenerNumero.value;  operacion ="factor";}
function sum_num(){ numAcc=obtenerNumero; operacion = "sumNum";}
function pro_nu(){  numAcc=obtenerNumero;  operacion="proNum";}



function calcular (){
  if(operacion == "+")
  {
      obtenerNumero.value = (+numAcc + +obtenerNumero.value);
  }
  else if(operacion == "-")
  {
    obtenerNumero.value = (+numAcc - +obtenerNumero.value);
  }
  else if(operacion == "*")
  {
    obtenerNumero.value = (+numAcc * +obtenerNumero.value);
  }
   else if(operacion == "/")
  {
    obtenerNumero.value = (+numAcc / +obtenerNumero.value);
  }
   else if(operacion == "raiz")
  {
    obtenerNumero.value = Math.sqrt(obtenerNumero.value);
  }
    else if(operacion == "inversa")
  {
    obtenerNumero.value = 1/obtenerNumero.value;
  }
    else if(operacion == "elevate")
  {
    obtenerNumero.value = obtenerNumero.value  * obtenerNumero.value ;
  }
      else if(operacion == "elevatepo")
  {
    obtenerNumero.value = Math.pow(numAcc,obtenerNumero.value) ;
  }
  else if(operacion == "pote_2")
  {
    obtenerNumero.value = Math.pow(2,numAcc);
  }
  else if (operacion =="factor")
  {
    var total = 1;
    for (var i = 1; i <= numAcc; i++)
    {
      total = total*i;
    }
    obtenerNumero.value = total;
  }
  else if(operacion =="sumNum")
    {

      var list = obtenerNumero.value.split(",");
      var total = 0;
      for (var i = 0; i < list.length; i++) 
      {
        total += +list[i];
      }
      obtenerNumero.value = total;
    }

    else if(operacion=="proNum")
    {
      var list = obtenerNumero.value.split(",");
      var total = 1;
      for (var i = 0; i < list.length; i++) 
      {
        total *= +list[i];
      }
      obtenerNumero.value = total;
    }

    
}

window.addEventListener("load",init,false);