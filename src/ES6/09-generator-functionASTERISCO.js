/// los generadores son un tipo especial de funcion que se crea agregando un * despues de
// la palabra reservada function. asi => function* MyFunction (){};
// va a ejecutar una logica en particular en cada llamada y cuenta con la capacidad de
//almacenar informacion en memoria

// vamos a ver dos ejemplos. en uno iteramos un Array y en otro incrementamos un acumulador:

// array iterado por function* (generator):

function* iterador(arreglo){
    for (let elemento of arreglo){/////////conm un FOR OF obtenemos los elementos de cada indice
        yield elemento; //// atencion a yield en lugar de return;
    } 
}

const variable = iterador(['juan','matias','ana']);

console.log(variable.next().value ); //juan
console.log(variable.next().value ); //matias
console.log(variable.next().value ); //ana
console.log(variable.next().value ); //undefined
// el utimo es undefined por que la posicion 3 del array no existe

function* iterador2(arreglo){
    for (let elemento in arreglo){ ////////////////// con un FOR IN obtenemos los indices
        yield elemento; //// atencion a yield en lugar de return;
    } 
}



const variableIndices = iterador2(['juan','matias','ana']);

console.log(variableIndices.next().value ); //[0]
console.log(variableIndices.next().value ); //[1]
console.log(variableIndices.next().value ); //[3]
console.log(variableIndices.next().value ); //undefined
// el utimo es undefined por que la posicion 3 del array no existe

// acumulador iterado por function* (generator):

function* crearIDs (){
    let indice=0;
    while (true) yield indice++;    
}

var id = crearIDs();

console.log(id.next().value); //0
console.log(id.next().value); //1
console.log(id.next().value); //2
console.log(id.next().value); //3
console.log(id.next().value); //4