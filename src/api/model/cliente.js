// Example model
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ClienteSchema = new Schema({
    //atributos
    nombre: String,
    apellido: String,
    telefono: Number,
    estado: Boolean
});


module.exports = mongoose.model('Cliente', ClienteSchema);
//mongoose.model('Cliente', ClienteSchema);