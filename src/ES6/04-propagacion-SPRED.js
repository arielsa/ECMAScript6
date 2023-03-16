/////////////////////////////////
///////SPRED OPERATOR//////////PROPAGACION
// toma la informacion de un objeto y la agrega a otro y tambien
//agrega una KEY a un objeto a partir de una VARIABLE con su valor, si lo tiene.
// funciona tomando el objeto original y volviendolo a llamar con tres puntos "..." (linea 11);

let persona ={nombre:'juan',edad:82};

let pais='AR';

let data = {...persona, pais};

// este metodo funciona como un "argumento", lo podemos ubicar en cualquier posicion:

let data2={id:undefined,...persona,pais};
console.log(data2);

let data3={id,...persona,pais};
console.log(data3);

let data4={id:1,pais,...persona};
console.log(data3);



