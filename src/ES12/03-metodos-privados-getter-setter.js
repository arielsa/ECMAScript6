//los metodos privados solo pueden ser accedidos dentro de una misma clase
//en javascript marcamos con un numeral/hashtag (#) los metodos que queremos que sean privados. 



// declaracion de una clase
class User {};
// genera una instancia
//const newUser = new User ();

class user {
    // metodos
    greeting() {
        return "hello";
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor

class user { 
    constructor() {
        console.log("Nuevo usuario");
    }
    greeting() {
        return "hello";
    }
}

const david = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user("Ana");
console.log(ana.greeting());

// setters getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    // metodos
    #speak() {/////////////////////////// metodo privado
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {/////////////////////metodo privado
        return this.age;
    }
    set #uAge(n) {//////////////////metodo privado
        this.age = n;
    }
}

const bebeloper1 = new user ("david", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);