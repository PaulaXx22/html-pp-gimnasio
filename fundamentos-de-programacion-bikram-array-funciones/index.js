var arrayVacio= []
var arrayNumeros=[0,1,2,3,4,5,6,7,8,9]


 var arrayNumerosPares=[0,2,4,6,8]

var arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]

function suma (num1,num2){return num1+num2}

function potenciacion (num1,num2) {return Math.pow (num1,num2)
    
}
function separarPalabras (str){
   let arr=str.split (" ")
   return arr
}

function repetirString(str,num){
    let str1 = "";
  while (num !==0) {
    str1+=str
    num=num -1;
    
  } return(str1)
} 
function esPrimo(numero) {
    for (var i= 2 ; i< numero; i++){
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
   
    
}
let arraynum=[]
function ordenarArray (arraynum) {
    arraynum.sort(function (a,b) {
        return a-b})
        return arraynum
    
}


function obtenerPares (arraynumero) {
        let pares = arraynumero.filter(function(arraynumero) {
          return arraynumero % 2 === 0;
        });
      
        return pares;
}
    

    
   function pintarArray(arr) {
    let cadena = '['; 
    
    for (let i = 0; i < arr.length; i++) {
      // Agregamos cada elemento del array a la cadena
      cadena += arr[i];
      
      // Agregamos una coma y un espacio si no es el último elemento
      if (i !== arr.length - 1) {
        cadena += ', ';
      }
    }
    
    cadena += ']'; // Agregamos el corchete de cierre al final
    
    return cadena;
  }
  function arrayMapi(arr, func) {
    // Verificamos que se haya pasado un array y una función como argumentos
    if (!Array.isArray(arr) || typeof func !== 'function') {
      throw new Error('Los argumentos deben ser un array y una función.');
    }
  
    // Creamos un nuevo array para almacenar los resultados
    const mappedArray = [];
  
    // Iteramos sobre cada elemento del array original y aplicamos la función
    for (let i = 0; i < arr.length; i++) {
      mappedArray.push(func(arr[i], i));
    }
  
    // Retornamos el nuevo array con los resultados
    return mappedArray;
  }
  function eliminarDuplicados(arr) {
    // Verificamos que se haya pasado un array como argumento
    if (!Array.isArray(arr)) {
      throw new Error('El argumento debe ser un array.');
    }
  
   s
    const arraySinDuplicados = arr.filter((valor, indice) => {
      return arr.indexOf(valor) === indice;
    });
  
    return arraySinDuplicados;
  }
//individual

const arrayNumerosNeg = [];

for (let i = 0; i >= -9; i--) {
  arrayNumerosNeg.push(i);
}
// 1. Crear variable holaMundo con las palabras 'Hola' y 'Mundo'
const holaMundo = ['Hola', 'Mundo'];

// 2. Crear variable loGuardoTodo con diferentes tipos de valores
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

// 3. Crear variable arrayDeArrays con arrays dentro de otro array
const arrayDeArrays = [
  [756, 'nombre'],
  [225, 'apellido'],
  [298, 'direccion']
];
// 1. Función multiplicacion que devuelve el resultado de la multiplicación de dos números
function multiplicacion(num1, num2) {
  return num1 * num2;
}

// 2. Función division que devuelve el resultado de la división de dos números
function division(num1, num2) {
  // Verificamos que el divisor no sea cero para evitar división por cero
  if (num2 === 0) {
    throw new Error('No se puede dividir por cero.');
  }
  return num1 / num2;
}

// 3. Función esPar que devuelve true si el número es par y false si es impar
function esPar(num) {
  return num % 2 === 0;
}
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

// Creamos el array arrayFunciones con las funciones definidas
const arrayFunciones = [suma, resta, multiplicacion];

function ordenarArray2(array) {
  // Utilizamos el método sort para ordenar de mayor a menor
  return array.sort((a, b) => b - a);
}

function obtenerImpares(array) {
  // Utilizamos el método filter para obtener solo los elementos impares
  return array.filter(num => num % 2 !== 0);
}
function sumarArray(array) {
  // Utilizamos el método reduce para sumar todos los elementos del array
  return array.reduce((total, num) => total + num, 0);
}

function multiplicarArray(array) {
  // Utilizamos el método reduce para multiplicar todos los elementos del array
  return array.reduce((total, num) => total * num, 1);
}


