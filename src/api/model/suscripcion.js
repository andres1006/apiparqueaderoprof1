// Example model
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SuscripcionSchema = new Schema({
    //atributos
    descripcion: String,
    valor: String,
    plazo: Number,
    estado: Boolean
});


module.exports = mongoose.model('Suscripcion', SuscripcionSchema);
//mongoose.model('Suscripcion', SuscripcionSchema);