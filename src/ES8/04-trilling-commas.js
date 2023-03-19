//trilling commas tiene que ver con agregar a un array posiciones entre comas ",".
/// las posiciones pueden estar vacias o rellenas con algun valor que le 
//pasemos por parametro.
// los espacios vacios son <empty items> 

//array comun:

const array = [45,54,98,47,];

console.log(array);//[45,54,98,47,]
console.log(array.length);//4

//array finalizado en trilling commas:

const array2 = [45,54,98,47,,,,,];

console.log(array2);//[45,54,98,47, <4 empty item>]
console.log(array2.length);//8

//array finalizado en trilling commas:

const array3 = [45,54,98,47,,,,,78];

console.log(array3);//[45,54,98,47, <4 empty item>,78]
console.log(array3.length);//9