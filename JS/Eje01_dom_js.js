window.onload = function () {
    var info = document.getElementsByTagName('informacion');

    // Numero de enlaces de la pagina
var Enlaces = document.getElementsByTagName('a');
info.innerHTML = 'Numero de enlaces = ' + Enlaces.length;

    // Direccion del penultimo enlace
var Mensaje = 'El penultimo enlace apunta a...' + Enlaces[Enlaces.length - 2].href;
info.innerHTML = info.innerHTML + '<br/>' + Mensaje;

    // Numero de enlaces que apuntan a http://prueba
var contador = 0;
for (var i = 0; i< Enlaces.length; i++){
    //es necesario comprobar los enlaces
    //
    if (Enlaces[i].href  == 'http://prueba' || Enlaces[i].href == 'http://prueba/'){
        contador++;
    }
}
info.innerHTML = info.innerHTML +'<br/>' + contador + ' enlaces apuntan a http://prueba';

    // Numero de enlaces del tercer parrafo
var parrafos = document.getElementsByTagName('p');
Enlaces = parrafos[2].getElementsByTagName('a');
info.innerHTML = info.innerHTML + '<br/>' + 'Numero de enlaces del 3er parrafo = ' + Enlaces.length;
};

// falta desplegarlo