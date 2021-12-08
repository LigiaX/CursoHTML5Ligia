function AgregarElemento() {
var Elemento = document.createElement("li");
var texto = document.createTextNode("Safari");

Elemento.appendChild = (texto);

var Lista = document.getElementById('Lista');
Lista.appendChild(Elemento);

etiqueta = '<li>Opera Movil</li>';

Lista.innerHTML = Lista.innerHTML + etiqueta;

}

window.onload = AgregarElemento;

//falta quitar el boton de html y ponerlo aqui, pero como se hace? buscarlo en google