/**
 * Asincronismo
 function soyAsincrona() {
  console.log('Hola, soy una funcion asincrona');
}

console.log('Iniciando proceso...');
soyAsincrona();
console.log('Terminando proceso...');
 */

function hola(nombre, myCallback) {
  setTimeout(function() {
    console.log('Hola, ' + nombre);
    myCallback();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function() {
    console.log('Adios, ' + nombre);
    otroCallback();
  }, 1000);

}

console.log('Iniciando proceso...');
hola('Ruben', function() {
  adios('Ruben', function() {
  console.log('Terminando proceso...');
}); // our callback will be a function
});

// Imagine we change the time it takes to execute the functions, we can see that the order of the console.log messages will change. This is ok when we know how long it takes to run the code, but when we don't know how it takes (databases, file reading), it's important to select the order of the functions to run. This is where callbacks come in. We can use callbacks to run the functions in the order we want.