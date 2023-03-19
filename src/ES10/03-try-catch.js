try {
    hello ();
} catch (error) {
    console.log(error);
}
///////////////// podemos personalizar el comportamiento del catch:
try {
    onotherFn();
} catch {
    console.log("esto es un error")
}