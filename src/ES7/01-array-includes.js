// nos permite saber si existe un elemento en un array

let numbers = [51,28,93,4];

console.log(numbers.includes(28));// true 
//nos retorna TRUE. por que esta preguntando: esta el valor 28 dentro del array?si, entonces: 'true'
// es una buena herramienta de validacion.

let list = ['oscar','juan'];

console.log(list.includes('oscar'));//true
console.log(list.includes('OSCAR'));//false
// deveulve false porque es capsencitive es decir diferencia MAYUSCULAS de minusculas.
// esto ultimo se puede reparar con un lowerCase.