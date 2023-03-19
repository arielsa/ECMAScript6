
//nos convierte en objeto un un array multidimencional
const arreglo = new Map ([["name", "alexa"], ["age", 24]]);
console.log(arreglo);
console.log(Object.fromEntries(arreglo));
console.log(arreglo);
const nuevoObjeto = Object.fromEntries(arreglo);
console.log(nuevoObjeto);