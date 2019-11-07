// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ClienteSchema = new Schema({
    //atributos
    nombre: String,
    apellido: String,
    telefono: Number,
    estado: Boolean
});

mongoose.model('Cliente', ClienteSchema);