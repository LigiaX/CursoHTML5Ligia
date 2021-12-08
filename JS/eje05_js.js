/* let f = () => { return 'Funcion flecha sin parametros'; };
let f2 = (x) => x * x;
let f3 = (x, y, z) => { return x + y + z; }

console.log(f());
console.log(f2(7));
console.log(f3(4, 7, 9));


alert('esta es una alerta informativa');

let valor = prompt('Deme la cantidad ', '');

console.log(typeof valor);

let confirmar = confirm('seguro de eliminar?');
console.log(confirmar);

if (confirmar)
    console.log('se elimino');
else
    console.log('el usuario confirmo');

*/
/*
function getEdad() { 
    var edad = prompt('Introduce tu edad', ''); 
    if (isNaN(edad)) { alert('Introduce un número válido');} 
    else{
        if(Number(edad) > 0&& Number(edad) < 18) 
         {alert('Menor de edad!'); } 
        else 
        { if (Number(edad) >= 18 && Number(edad) < 60) 
        { alert('Persona Adulta'); }
        else { alert('Adulto mayor'); 
        
        } 
    }
    }
}

window.onload = getEdad;
*/
    function getColor() 
    {
        var color= prompt('¿Cuál es tu color favorito?', '');
    switch(color)  
    {
        case 'rojo':alert('El color rojo es una buena opción!');
        break;
        case 'negro':alert('El color negro combina con todo!');
        break;
        case 'blanco':alert('Es genial este color');
        break;
        default:alert('El color: ' + color + ' no está en la lista');
        break;
    }
    } 

    window.onload = getColor;