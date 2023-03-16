//////////////////////////////
//con los modulos podemos encapsular logica en un archivo dentro de un objeto
//y llamarla desde otro archivo como en el .Mat de javascript

// aca vamos a crear ese modulo con su logica y a utilizar la palabra clave reservada EXPORT


const hello =()=>{
    console.log('hello! ');
}

export default hello;