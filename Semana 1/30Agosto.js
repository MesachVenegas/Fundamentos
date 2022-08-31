
let phrases = "Hola mundo!";


// H o l a   M u n d o !
// 0 1 2 3 4 5 6 7 8 9 10  <-- Indices
// 1 2 3 4 5 6 7 8 9 10 11


// Propiedades --> Características.
//      dato.nombrePropiedad.
// string.length --> Cantidad de caracteres.
// console.log(phrase.length);


// Relación entre  el ultimo indice y la longitud del string
// El ultimo indice es igual a la longitud menos 1 = string.length - 1
// console.log(phrase.length - 1); // ultimo indice


// Extraer un carcater.
// console.log(phrase[phrase.length-1]);
// console.log(phrase[100]); // No existe un carácter en dicho indice


// ============================ Numbers ========================================= //
let positiveNumber = 100.5;
let negativeNumber = -50;
let entero = 10;
let floatNumber = 0.75;

//  Números especiales.
/*
    --> -Infinity
    --> Infinity
    --> NaN (Not a Number)
        Procesos que no devolveran una cifra numérica significativa.
*/
// console.log(typeof NaN);

// Operadores
/*
    Operador --> Simbolo que indica la operacion que se va a llevar acabo +. -, *, /

    Operando --> Son los datos que vamos a manipular a traves del operador,

    Unarios ==> Aquel operador que solo necesita un operando.
    Binarios ==> Son aquellos que necesitan 2 operandos.
    Ternarios ==> Se conforma de 3 datos.

*/

//  Operaciones Aritméticas.

// console.log(`Suma: ${10 + 10}`);
// console.log(`Resta: ${10 - 2}`);
// console.log(`Multiplicación: ${10 * 10}`);
// console.log(`Division: ${10 / 2}`);
// console.log(`Potencia: ${10 ** 10}`);
// console.log(`Modulo: ${12 % 2}`);


// conversion explicita
// console.log("100" - 1);
// console.log(parseInt(10.75));



// Operadores de comparacion
/*
    menor que <
    mayor que >
    igual a ==
    diferente de !=
*/

// console.log("abc" < "abcd");


// Almacenar en una variable una frase cualquiera, y van a determinar si su primera letra es la letra "A"/"a". Si es asi en una segunda variable, vamos a almacenar un booleano true, de nmo ser asi, guardamos un false.

let phrase = "Hola soy una frase cualquiera y no se que poner por eso estoy aquí";
let isTrue = phrase[0].toLowerCase() == "a";
console.log(isTrue);

// Solución profe.
// Recomienda enterder primero el problema y los pasos necesarios para completarlos antes de empezar a escribir código.
let profPhrase = "A una frase de prueba para calar este pedo";
let firstLetter = profPhrase[0];
let firstChartLowerCase =  firstLetter.toLowerCase();
console.log(firstChartLowerCase);
let firstChart = firstChartLowerCase == 'a';
console.log(firstChart);