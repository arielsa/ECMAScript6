//padding start y padding end concatenan un string a otro string
// la funcion .padStart y .padEnd reciben 2 parametros:
// 1) un numero que modifica su posicion, extencion y repeticion
// 2) y el string que se desea agregar.

// el numero que le pasamos por parametro esta en relacion al tamaño del sting oroginal:
// una vez que supera el tamaño oriiginal del string comienza a repetirce.

// .padStart es una funcion que crea un string nuevo a partir de otro.
// en los parametros le decimos cual va a ser el tamaño de ese string nuevo y con que
// va a rellenar ese string si el tamaño nuevo es superior al original.
// si el tamaño del nuevo string que indicamos por parametros es inferior al tamaño
// del string original solo nos devolvera el string original
// ejemplos:

const string = 'hello';

/////////padStar:

console.log(string.padStart(1,'_'));// 'hello'
console.log(string.padStart(6,'_'));// '_hello'
console.log(string.padStart(7,'_'));// '__hello'
console.log(string.padStart(8,'_'));// '___hello'

console.log(string.padStart(5,'./'));// 'hello' /// 5 en el parametro no alcansa a concatenar nada
console.log(string.padStart(6,'./'));// '.hello'///6 concatena solo el punto (.) 
console.log(string.padStart(7,'./'));// './hello'///7 concatena el ./ entero una vez
console.log(string.padStart(8,'./'));// './.hello'/// 8 concatena el ./ una vez y media
console.log(string.padStart(9,'./'));// '././hello'// 9 concatena el ./ 2 veces
console.log(string.padStart(10,'./'));// '././.hello'

//// padEnd:

console.log(string.padEnd(1,'_'));// 'hello'
console.log(string.padEnd(6,'_'));// 'hello_'
console.log(string.padEnd(7,'_'));// 'hello__'
console.log(string.padEnd(8,'_'));// 'hello___'

console.log(string.padEnd(5,'./'));//' hello'   /// 5 en el parametro no alcansa a concatenar nada
console.log(string.padEnd(6,'./'));// 'hello.' ///6 concatena solo el punto (.) 
console.log(string.padEnd(7,'./'));// 'hello./' ///7 concatena el ./ entero una vez
console.log(string.padEnd(8,'./'));// 'hello./.' /// 8 concatena el ./ una vez y media
console.log(string.padEnd(9,'./'));// 'hello././' // 9 concatena el ./ 2 veces
console.log(string.padEnd(10,'./'));//'hello././.'