/// EXISTER DOS TIPOS DE EXPRESIONES DE DESTRUCTURACION. PARA ARRAY Y PARA OBJETOS

// arrays destructuring:

let fruit = ['banana','apple'];
//ES6
let [a,b]= fruit; ///////////// destructuro
console.log(a,b); //////// los muestro por consola
//previo ES6
console.log(fruit[0],fruit[1])///// lo muestro por consola

// arrays destructuring:

let user = {names:'ariel', age:'14'};
//ES6
let {names,age}=user;/////// desestructuro
console.log(names,user);/// imprimo
// previo ES6
console.log(user.age,user.names);// imprimo

/////////////////////////////////
///////SPRED OPERATOR//////////PROPAGACION
// toma la informacion de un objeto y la agrega a otro y tambien
//agrega una KEY a un objeto a partir de una VARIABLE con su valor, si lo tiene.
// funciona tomando el objeto original y volviendolo a llamar con tres puntos "..." (linea 31);

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

//////////////////////////////////
////////REST PARAMETRES//////////
// con el operador "..." tambien podemos pasarle a una funcion valores sin previa definicion.
// despues del "..."se asigna un nombre. en mi caso "...values" o "...valores".
//despues del "...valores" no puede ir nada mas ya que la cantidad de elementos
// que ingresan a "...valores" es indefinida y por lo tanto el interpretador no puede
//identificar donde termina.

function suma (num,...valores){
    console.log(valores);  //////////// imrpime los valores agregados mediante el "...valores"
    console.log(num,valores);/////// imprime el num y array de "...valores"
    console.log(num + valores[0]);/// imprime el num + la posicion 0 del array de "...valores"
    return num + valores;
}



