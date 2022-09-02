//* Valores Nulos
// No hay valor
// JS fuerza la devolución de un resultado.
let userName;
// console.log(userName);

let text = "Hola como están?"
// console.log(text[100]);

let fruitsArray = ["Fresa", "Mango"];
// console.log(fruitsArray[100]);

//* NULL
/*
    Es una ausencia de valor generada de forma intencionada.
    Null reprenta una ausencia de valor que esta ocurriendo a propósito.
*/
let userAge = null;
// console.log(userAge);

// La comparacion estricta de igual manera toma en cuenta el tipo de dato que se esta comparando.

// console.log(Number(null), Number(undefined)); // Null ==> 0 , undefined ==> NaN.
// console.log(String(null), String(undefined));
// console.log(Boolean(null), Boolean(undefined)); // ==> false.

//* Operadores de corto circuito.
//  son los &&, || y !
/*
    Nullish coalescing [??] no devuelve un booleano sino uno de los 2 datos dependiendo el dato.
    devolviendo el primer dato no nullo/indefinido.
    dato1   ??  dato2
    console.log(null ?? "Bien definido"); // ==> Bien definido
    console.log("no null" ?? "Bien definido"); // ==> not null
    console.log(null ?? undefined); // ==> undefined devolviendo el ultimo evaluado.
    console.log(false ?? "Definido"); // ==> false ya que es un valor definido también = 0.
    console.log((null ?? undefined) ?? "Brenda") ==> Brenda
*/
userName = "Mesach Venegas"
// console.log(`Hola ${userName ?? "Usuario"}, Bienvenido!`);


const count = 0;
// console.log(null ?? count ?? 35);
console.log(!"Mesach");
