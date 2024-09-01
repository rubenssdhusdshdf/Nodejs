// This execute as a for every second

console.log('ey, world!');

let i = 0;
setInterval(function() {
    console.log(i);
    i++
    if (i === 5) {
        console.log('forzamos error');
        var a = 3 + z;
    }
}, 1000);

console.log('Segunda instrucción'); // En otros lenguajges, lo que esperes que eespere es que se ejecute el first console, log, then the second console log, and then the setInterval, but in JS, the setInterval is executed first, and then the second console log, and then the first console log. This is because JS is a single-threaded language, and the setInterval is executed in the background.

