// Example model
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Modalidad = require('./modalidad')

const ClienteSchema = new Schema({
    //atributos
    cedula: String,
    nombre: String,
    apellido: String,
    telefono: Number,
    modalidad: { type: Schema.Types.ObjectId, ref: Modalidad, required: true },
    estado: Boolean
});


module.exports = mongoose.model('Cliente', ClienteSchema);
//mongoose.model('Cliente', ClienteSchema);