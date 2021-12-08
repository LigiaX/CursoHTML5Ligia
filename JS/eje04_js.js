//function sumar(x, y){
const operacion = function(x, y) {
    return x + y;
}

var a = operacion(7, 9);
//var a = sumar(4, 8);
console.log(a);
//a = sumar(250, 300);

//operacion = function(x, y) {
//    return x - y;
//}

var b = operacion(7, 9);
console.log(b);

function init(){
    document.getElementsByTagName('button')[0].onclick = sumar;
}

function myFun(fun, arr){
    let result =[]; //crea arreglo
    //let i; // declara variable
    for (i=0; i< arr.length; i++ ){
        result[i] = fun(arr[i]);
    }
        return result;
    
}
    
const cubo = function (x){
        return x * x * x;
    }

let array =[2, 4, 6, 8, 10];
let valores = myFun(cubo, array);
console.log('valores: ', valores);

var num1 = 23, num2 = 45, name = 'Mauricio';

function multiplicar(x, y){
    return x*y;
}

console.log(multiplicar(3, 4));


function adicionar(){
    var num1 = 8, num2 = 6;


function add(){
    return this.name + ' anoto ' + (num1 + num2);
}
return add();

}

console.log(adicionar());