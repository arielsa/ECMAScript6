const list = new Set(); ////instanciamos un objeto a setear

list.add('item1');// le podemos agregar de a un elemento a la vez
list.add('item2').add('item3');// o de a varios

console.log(list);// {'item1','item2','item3'};