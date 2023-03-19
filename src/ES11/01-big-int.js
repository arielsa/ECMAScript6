const aBigNumber = 8907245920742093847n;
const anotherBigNumber = BigInt(8907245920742093847);
console.log(aBigNumber);// 8907245920742093847n
console.log(anotherBigNumber);// 8907245920742093847n

//Límites numéricos en JavaScript
//📏 JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y 
//un mínimo Number.MIN_SAFE_INTEGER. Fuera de estos límites, los cálculos matemáticos 
//pueden fallar y mostrar resultados erróneos. Con BigInt esto se resuelve.

//Diferencia entre el operador OR y el Nullish coalescing
//🔨 El operador OR (||) evalúa un valor falsey. Un valor falsy es 
//aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), 
//false, NaN, undefined o null.

//Puede que recibas una variable con un valor falsy que necesites asignarle a otra 
//variable, que no sea null o undefined. Si evalúas con el operador OR, este lo cambiará, 
//provocando un resultado erróneo.

