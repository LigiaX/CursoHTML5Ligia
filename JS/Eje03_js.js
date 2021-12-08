//var miVar = 10;
let miVar = 10;
let contador = 'Hola mundo';

function alerta(){
    alert('Hizo clic!');
    var contador;
    texto = 'Texto con comillas simples.';
    texto1 = "Texto con comillas dobles.";
    texto2 = 'Esto es un texto \'con comillas\' dentro del mismo.';
    //alert(texto + ' ' + texto1 + ' ' + texto2);
    console.log(miVar);
    console.log(contador);
    console.log(typeof contador);
    contador = Null;
    var miVariable;
    if (contador!=null){
        console.log('Tienen un valor');}
    else{
    console.log(typeof contador);
    }
    }
function HacerClic(){
    document.getElementsByTagName('p')[1].onclick = alerta;
    document.getElementById('uno').onclick = alerta;
    console.log(miVar);
    }
window.onload = HacerClic;
 