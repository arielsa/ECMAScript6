// intalamos la dependencia fetch de node : npm install node-fetch
//e importamos el metodo 

import fetch from "node-fetch";

//guardamos una API en una constante con el AWAIT SIN ENCAMPSULARLO EN UNA PROMISE o en un ASYNC FUNCTION.
//esto ahorra mucha logica y codigo.
// guardamos en otra constante la API y la transformamos a un objeto json

const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();

// exportamos. 

export { products };