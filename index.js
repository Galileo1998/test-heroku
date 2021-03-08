const express = require('express')
const compression = require('compression')
const routes = require('./routes')
const path = require('path')

//Crear una app express
const app = express();

//Donde cargar los archivos estaticos
app.use(express.static('public'));


//Habilitar pug
app.set('view engine', 'pug');


//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

//Ruta para el home
const host = '0.0.0.0'
const port = process.env.PORT;
app.listen(port, host, ()=>{
    console.log('El servidor está corriendo');
});
