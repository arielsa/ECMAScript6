////////////////////
// dentro de un objeto hay keys, llaves. si el nombre de la llave coicide con, por ejemplo
//el parametro de una funcion que lo anida, podemos ahorrarnos el llamado al puntero.

// en el siguiente ejemplo tenemos un objeto dentro de una funcion.
//esa funcion recibe 4 valores por parametro y el objeto tiene 4 KEYS y dos coinciden.
// otras dos no:

function Myfunction(nombre, age, codigo, telefono){
    return MyObject={
        nombre,/////////////al coincidir NO hace falta referenciarlo
        age,////////////////al coincidir NO hace falta referenciarlo
        Id:codigo,///////////al NO coincidir  hace falta referenciarlo
        TEL:telefono,///////////al NO coincidir  hace falta referenciarlo
    };
}