const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/amino-database')
    .then(db => console.log('DB esta conectada'))
    .catch(err => console.error(err));

//Configuraciones
app.set('port', process.env.port || 3000)

// Middlewares// install morgan para la peticiones get, put etc
app.use(morgan('dev'));
app.use(express.json());// cada vez que recibimos el jason el servidor lo entiende y poder manipularlo



//Routes
app.use('/tasks',require('./routes/tasks'));




// Static files
app.use(express.static(__dirname + '/public'));// comparto mi carpeta public al navegador







//Servidor escuchando...
app.listen(app.get('port'), ()=>{
    console.log('Servidor levantado en el puerto', app.get('port'));
});
