//  Longitud arreglo
//  arreglo.length

const colors= ["Amarillo", "Rosa", "Azul"];
// console.log(colors.length);

// Que relación existe entre la longitud y el ultimo indice?
// El ultimo indice siempre sera la longitud -1.

//! Metodos básicos para modificar un arreglo.
//* Agregar push(), unshift().
/**
 * arreglo.push(nuevo_elemento) agrega un elemento o varios al final del arreglo y retorna la nueva longitud del arreglo.
 *
 * arreglo.unshift(nuevo_elemento) agrega un elemento o varios al inicio del arreglo y retorna la nueva longitud del arreglo.
 */
let returnPush = colors.push("Rojo");
// console.log(returnPush);
// console.log(colors);

let returnUnshift = colors.unshift("Negro", "Purpura");
// console.log(returnUnshift);
// console.log(colors);


//* Eliminar pop(), shift()
/**
 * pop() elimina el ultimo elemento y regresa como valor de retorno el elemento eliminado.
 *
 * shift() elimina el primer elemento y regres como valor de retorno el elemento eliminado.
 */
// console.log(colors.pop());
// console.log(colors);

// console.log(colors.shift());
// console.log(colors);

//* Modificar
colors[0] = "Magenta";
// console.log(colors);


//* Agregar y eliminar en medio del arreglo.
//? arreglo.splice(indiceInicio, CantidadEliminar, nuevoElemento, ...);

// Agregar
/**
 * Splice permite agregar, eliminar elementos de un arreglo y tiene como valor de retorno lo elementos eliminados para eliminar elementos deben ser continuos no saltando indices.
 */
// Agregar un nuevo elemento desde el indice 3
let addSplice = colors.splice(3, 0, "Naranja");
// console.log(addSplice);
// console.log(colors);

// Eliminar
// Eliminar el elemento en el indice 2.
let deletSplice = colors.splice(2, 1);
// console.log(deletSplice);
// console.log(colors);

// Agregar y Eliminar
// Eliminar los elementos en la posición 2 y 4 y agregar dos nuevos colores.
let add_delete = colors.splice(2, 2, "Negro", "Cyan");
// console.log(add_delete);
// console.log(colors);


// Split() convierte en un arreglo una cadena de texto.

let song = "Soy pésimo para fingir pero puedo escribir y no quiero incomodarte pero no puedo mentir"
// "" si se usa eso devolverá un arreglo con cada uno de los caracteres del strign.
let stringToArray = song.split(" ");
console.log(stringToArray);



/**
    Crear una funcion que reciba dos parametros, el primero sera una frase y el segundo una palabra.
    La funcion debe eliminar la palabra señalada de ;a frase y retormar la frase modificada(cadena de texto)
*/
function deleteWord(phrase, word){
    
}
// Me gustan mucho los gatos que ronronean, gatos --> me gustan mucho los que ronronean.

let phrase = "Me gustan mucho los gatos que ronronean"
console.log(deleteWord(phrase, "gatos"));