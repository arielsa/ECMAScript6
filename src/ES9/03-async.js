async function* anotherGenerator() { //////////////generator asyncronico
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));/////metodo .next() y .then() combinados
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("hello");

//////////////////////////////////////////////////////

async function arrayOfNames(array) {//////asyn function
    for await (let value of array) {/// for await
        console.log(value);
    }
}

const names =arrayOfNames(["Alexa", "Oscar", "David"]);
console.log("After");