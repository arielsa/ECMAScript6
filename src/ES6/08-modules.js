//////////////////////////////
//con los modulos podemos encapsular logica en un archivo dentro de un objeto
//y llamarla desde otro archivo como en el .Mat de javascript

// el modulo fue creado dentro de la misma carpeta en el archivo "module.js"
// y lo importamos con las palabras reservadas claves IMPORT (para el modulo) y FROM (ubicacion):
import hello from "./module.js";

hello(); 

//// asi solo no va a funcionar. por que javascript vanilla exige una configuracion.
// para que funcione tenemos que agregar a nuestro package.jason 
// cuando usamos un framework y se hace la instalacion esta configuracion se genera automaticamente.
//configuracion: añañdir un flag al archivo de package.jason:
//al fina ldel archivo abajo de la licencia le tenemos que indicar que el tipo de elementos que
//tambien va a tener son modulos. asi que agregamos debajo del "license...", ese flag 
// que nesecitamos que es: "type":"module",. con esto el interpretador podra leer sin problemas el modulo.
