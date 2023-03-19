// importa dinamicamente. maneja el flujo de informacion para tomar alguna medida si la
//importacion de algun modulo es muy lenta. ayuda a establecer que debe hacer el programa si
//la demora, por ejemplo, de la carga de una API se demora. 

// en el ejemplo por medio de una promesa vamos a habilitar la carga del modulo en los
//recursos del navegador.

//esto hace que la carga inicial de las paginas se mas rapida, habilitando luego los modulos que 
//sean necesarios.

// probar este codigo con el index.html en un navegador con la herramienta de inspeccion y observar como el modulo se
//carga luego de que cumplimos la promesa.


const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./Module.js");
    console.log(module);
    module.hello();
})