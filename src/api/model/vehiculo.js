// Example model
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cliente = require('./cliente')



const VehiculoSchema = new Schema({
    //atributos
    placa: String,
    cliente: { type: Schema.Types.ObjectId, ref: Cliente, required: true },
    tipoVehiculo: String,
    estado: Boolean
});

module.exports = mongoose.model('Vehiculo', VehiculoSchema);
//mongoose.model('Vehiculo', VehiculoSchema);