const mongoose = require('mongoose');
const {Schema} = mongoose;

const Task =  new Schema({
    titulo: String,
    descripcion: String
});

module.exports=mongoose.model('Task', Task);