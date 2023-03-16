/////////// anterior a la actualizacion:
//// los parametros por defecto se asignaban con un condicional OR "||".
function newUser(age,name,country){
    var name = name || 'ariel';
    var age = age || 32;
    var country = country || 'AR';
    console.log(age,name,country);
}

///// posterior a ES6:
///los valores por defecto pueden ir en la asignacion de parametros.

function newAdmin (age=34,name='david',country='MX'){
    console.log(age,name,country);
}