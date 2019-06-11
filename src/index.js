const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();

mongoose.connect("mongodb://localhost:3000/mean-course" , { useNewUrlParser: true }).then(
    (res) => {
        console.log("Connected to Database Successfully.")
    }
).then(db => console.log('DB esta conectada'))
    .catch(err => console.error(err));

//Configuraciones
app.set('port', process.env.port || 3000)

// Middlewares// install morgan para la peticiones get, put etc
app.use(morgan('dev'));
app.use(express.json());// cada vez que recibimos el jason el servidor lo entiende y poder manipularlo



//Routes
app.use('/tasks',require('./routes/tasks'));

//Error
app.use(bodyParser.json());
app.use(function (error, req, res, next) {
    if(error instanceof SyntaxError){ //Handle SyntaxError here.
        return res.status(500).send({data : "Invalid data"});
    } else {
        next();
    }
});




// Static files
app.use(express.static(__dirname + '/public'));// comparto mi carpeta public al navegador







//Servidor escuchando...
app.listen(app.get('port'), ()=>{
    console.log('Servidor levantado en el puerto', app.get('port'));
});

