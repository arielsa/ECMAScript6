const funcionAsincronica= ()=>{

    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('asincronismo'), 2000)
            : reject (new Eror ('error'))        
    })
};

const anotherFn = async () => {//////////////////////////// async
    const somethig = await funcionAsincronica();///////////////await
    console.log(somethig);
    console.log("Hello");
}

console.log("before");
anotherFn();
console.log("After");