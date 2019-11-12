// Example model

'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AccesorioSchema = new Schema({
    //atributos
    descripcion: String,
    cantidad: Number,
    observacion: String
});


module.exports = mongoose.model('Accesorio', AccesorioSchema);
//mongoose.model('Accesorio', AccesorioSchema);