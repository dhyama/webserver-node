/********************************************************
 * Aplicación mediante la que generamos un servicio web *
 *******************************************************/

//Importamos la librería con la que podemos crear el servicio web (Documentación -> https://www.npmjs.com/package/express)
const express = require('express');
//Ejecutamos la función de expres que nos genera el servicio en app
const app = express();

//Middelware para servir contenido estatico por defecto
app.use(express.static(__dirname + '/public'));

//Al generar el middelware anterior puede producirse un conflicto con la configuración por defecto del app.get en '/'
//Configuramos una peticion get cuanto el path es '/'
// app.get('/', (req, res) => {
//     // res.send('Hola mundo.')
//     //Creamos la salida json que queremos devolver
//     let salida = {
//         nombre: 'Miguel Ángel',
//         edad: 42,
//         url: req.url
//     }

//     //Express ya detecta que la salida es un objeto json y lo convierte directamente sin necesidad de funciones
//     res.send(salida);
// })

//Configuramos una peticion get cuanto el path es '/data'
app.get('/data', (req, res) => {
    res.send('Hola data.')
})

//Estamos escuchando en el puerto 3000
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
})