// Example model
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Vehiculo = require('./vehiculo');
const Usuario = require('./usuario');
const Objeto = require('./objeto');


const RegistroSchema = new Schema({
    //atributo
    id: Number,
    fecha: Date,
    vehiculo: { type: Schema.Types.ObjectId, ref: Vehiculo, required: true },
    objeto: { type: Schema.Types.ObjectId, ref: Objeto },
    usuario: { type: Schema.Types.ObjectId, ref: Usuario, required: true },
    horaEntrada: { type: String, required: true },
    horaSalida: Date,
    descripcion: String,
    estado: Boolean,
    totalPago: Number

});


module.exports = mongoose.model('Registro', RegistroSchema);
//mongoose.model('Registro', RegistroSchema);