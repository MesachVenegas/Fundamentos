
//  Almacenar información en el navegador.
//  Se usa para no perder información anteriormente cargada.

// Window => representa al navegador
/*
    localStorage => los datos no tiene fecha de expiración pero están asociados a un dominio y aun que el navegador se cierre la información continuara siendo almacenada.

    sessionStorage => los datos solo se guardan mientras la session siga activa, una vez se cierra la ventana la información se pierde.
*/
// stripe, conekta pasarelas de pago

// JSON --> JavaScript Object Notation (Es un formato de texto.)

let jsonString = JSON.stringify("Hola Mundo");
let jsonNumber = JSON.stringify(100);
let jsonArray = JSON.stringify([1,2,3,4]);
let jsonObject = JSON.stringify({
    name: "Mesach",
    age:29});
// console.log(jsonString);
// console.log(jsonNumber);
// console.log(jsonArray);
// console.log(jsonObject);

// JSON.parse(json) => datos en su formato original.
// console.log(JSON.parse(jsonString));


// Metodos para el Storage
const user = {
    name: "Mesach",
    age: 29
}
// CRUD
//* Create (Generar información y guardarla en el navegador)
   // window.localStorage.setItem("nombrePropiedad","valorPropiedad")
    // localStorage.setItem("user", JSON.stringify(user))
    // localStorage.setItem("favoriteBand", JSON.stringify("Linkin Park"))
    // localStorage.setItem("saludo", JSON.stringify("Hola Soy Mesach Venegas y tengo 29 años"))
    // localStorage.setItem("cart", JSON.stringify(['galletas', 'choclate', 'helado']))

//* Read (Leer información anteriormente guradada en el navegador)
    // console.log(localStorage.getItem("user"))
    // console.log(localStorage.getItem("favoriteBand"))
    // console.log(localStorage.getItem("saludo"));

//* Update (Modificar datos anteriormente guardados en el navegador)
    let cartNow = JSON.parse(localStorage.getItem("cart"));
    console.log(cartNow);
    cartNow.push('pastel');
    localStorage.setItem("cart", JSON.stringify(cartNow))

//* Delete (Eliminar información almacenada en el navegador)




// obtenemos el elemento en el HTML.
const list = document.getElementById('product-list')

const getStorageInfo = () => {
    let cart = localStorage.getItem("cart");

    if(cart){
        cart = JSON.parse(cart)
        if(cart.length !== 0){
            let fragment = ``;
            cart.forEach(item => {
                fragment +=  `<li>${item}</li>`});
            list.innerHTML= `
                <ul>
                    ${fragment}
                </ul>`;
        }
    }else{
        localStorage.setItem("cart", JSON.stringify([]))
    }
}


function addProduct(product) => {
    let carActual = JSON.parse(localStorage.getItem("cart"))
    carActual.push(product)
    localStorage.setItem("cart", JSON.stringify(carActual));
}

document.addEventListener("DOMContentLoaded", () => {
    getStorageInfo();
})