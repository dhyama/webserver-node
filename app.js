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
    res.write('Hola Mundo');
})