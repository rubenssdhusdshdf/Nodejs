function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log('Hola, ' + nombre);
            resolve(nombre); // resolve instead of call back
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios, ' + nombre);
            resolve();
        }, 1000);
    });
}

// Iniciando el proceso...
console.log('Iniciando el proceso...');
hola('Cristobal')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => { // arrow function ES6
        console.log('Terminado el proceso');
    })
    .catch(error => { //asegurarse de lo que pasa no falla
        console.error('Ha habido un error:');
        console.error(error);
    });
