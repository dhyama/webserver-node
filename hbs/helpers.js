/********************************************************
 * Modulo en el que crearemos todos los helpers de hbs *
 *******************************************************/
//Importamos la libreria HBS
const hbs = require('hbs');

//Incluimos los helpers, son funciones que se disparan cuando el template lo requiere, cuando lanzamos template busca el nombre en 
// los helpers que tenemos definicos, en caso de no existir ninguno entonces devolveria un undefined.
hbs.registerHelper('getAnyo', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, inx) => {
        palabras[inx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
})