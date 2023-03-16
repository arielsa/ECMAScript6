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