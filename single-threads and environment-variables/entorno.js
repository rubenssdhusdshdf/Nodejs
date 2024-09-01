// como meter informacion de fuera adentro de un archivo js

// Si quiero que haya un valor que no vaya dentro del software, eso no deberia estar en el codigo. Para eso estan las variables de entorno

let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'no tengo web';
console.log("Hola " + nombre);
console.log("Hola " + web);
