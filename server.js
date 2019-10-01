/********************************************************************************************
 * Aplicación mediante la que generamos un servicio web con Express - Heroku - HBS          *
 * **************************************************************************************** *
 *  Express  -> Libreria para la constructor de servicios web                                                *
 *  Heruku   -> Servicios Paas en la nuve para subir nuestro servicio web                   *
 *  HBS      -> Libreria para creacion de webs de forma dinamica (Handebars, muostage)      *
 *  Boostrap -> Librería para dar estilos a las páginas web                                 *
 *******************************************************************************************/

//Incorporamos bootstrap añadiendo la carpeta assets/css y js del source (Tambien se puede hacer con npm install boostrap)
//  (Documentación - > https://getbootstrap.com/docs/4.3/getting-started/introduction/)

//Importamos la librería con la que podemos crear el servicio web (Documentación -> https://www.npmjs.com/package/express)
const express = require('express');
//Ejecutamos la función de expres que nos genera el servicio en app
const app = express();

//Importamos la libreria HBS
const hbs = require('hbs');
//Importamos nuestro fichero de helpers
require('./hbs/helpers');

//Middelware para servir contenido estatico por defecto en Express
app.use(express.static(__dirname + '/public'));

//Incorporamos hbs (handlerbars o moustage) a Express (Documentación -> https://www.npmjs.com/package/hbs)
hbs.registerPartials(__dirname + '/views/partials'); //Indicamos el directorio donde se van a encontrar los parciales de hbs
app.set('view engine', 'hbs'); //Indicamos a Express que el visor por defecto va a ser hbs



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

//Configuramos el servicio para renderizar las páginas generadas con hbs
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'miGuel ángel',
        anyo: new Date().getFullYear()
    });
    //Hemos pasado como parametro a la renderizacion un objeto con las variables que utilizamos en hbs para la construcción dinamica de la web
})

//Configuramos una peticion get cuanto el path es '/about'
app.get('/about', (req, res) => {
    res.render('about', {
        anyo: new Date().getFullYear()
    });
    //Hemos pasado como parametro a la renderizacion un objeto con las variables que utilizamos en hbs para la construcción dinamica de la web
})

// //Configuramos una peticion get cuanto el path es '/data'
// app.get('/data', (req, res) => {
//     res.send('Hola data.')
// })

//Estamos escuchando en el puerto 3000
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
})