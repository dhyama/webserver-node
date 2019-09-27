/********************************************************
 * Aplicación mediante la que generamos un servicio web *
 *******************************************************/

//Importamos la librería con la que podemos crear el servicio web (Documentación -> https://nodejs.org/dist/latest-v12.x/docs/api/http.html)
const http = require('http');

/**
 * Creamos el servicio web
 * req -> parametros de entrada
 * res -> parametros de salida
 */
http.createServer((req, res) => {

    //Creamos la cabecera de tipo json
    res.writeHead(200, { 'Content-Type': 'application/json' });

    //Creamos la salida json que queremos devolver
    let salida = {
        nombre: 'Miguel Ángel',
        edad: 42,
        url: req.url
    }

    //Damos formato json a la salida
    res.write(JSON.stringify(salida));
    // res.write('Hola Mundo');
    //Finalizamos la respuesta del servicio
    res.end();
}).listen(8080);

//Salida para indicar que el servicio esta en funcionamiento.
console.log('Escuchando en el puesto 8080');