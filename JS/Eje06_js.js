var ingredientes = new Array();
ingredientes[0] = 'Azúcar';
ingredientes[1] = 'Café';
ingredientes[2] = 'Leche';
console.log(ingredientes[2]);

var scores = new Array();
console.log(scores);

var ingredientes2 = new Array('Elemento 1', 'Elemento 2', true, false, 89.5);
var ingredientes3= ['Elemento 1', 'Elemento 2', 'leche'];

/*console.log(ingredientes2[4]);
console.log(ingredientes2[5]);*/

/*for(let i=0; i < ingredientes2.length; i++)
{console.log(ingredientes2[i]);} */

for(let i of ingredientes3){
    console.log(i);
}


var todos = ingredientes2.concat(ingredientes3);
console.log(todos);

var index = ingredientes2.indexOf('Elemento 1');
console.log(index);

var index2 = ingredientes2.lastIndexOf(true);
console.log(index2);

var str = ingredientes2.join();
console.log(str);
console.log(typeof str);

var lastElement = ingredientes2.pop();
console.log(lastElement);

var newSize = ingredientes2.push('New Element');
console.log(ingredientes2);
console.log(newSize);
console.log(ingredientes2.length)

console.log(ingredientes2.reverse());

var firstElement = ingredientes2.shift();
console.log(ingredientes2);
console.log(firstElement);
console.log(ingredientes2.length);

/*var pedazos = ingredientes2.slice(1, 3);*/
var pedazos = ingredientes2.slice(-1);
console.log(pedazos);

console.log(ingredientes2.sort());

var numeros =[8, 9, 2, 5,1, 3, 4];
console.log(numeros.sort()); 

var cadena = ingredientes2.toString();
console.log(cadena);

let elemento = numeros.unshift(20);
console.log(numeros);
console.log(elemento);




/*let scores = new Array();
let scores2 = Array(10);
 let scores3 = [];*/