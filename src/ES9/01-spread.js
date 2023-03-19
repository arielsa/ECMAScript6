const user = { username: "gndx", age: 34, coutry: "CO" };
const { username, ...values } = user;/////////// separo el valor de user name del resto del objeto.
console.log(username);////// imprimo el valor de username
console.log(values);//// imprimo el objeto sin el username