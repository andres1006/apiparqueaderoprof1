// Example model
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Plazo = require('./plazo')


const ModalidadSchema = new Schema({
    //atributos
    descripcion: String,
    valor: String,
    plazo: { type: Schema.Types.ObjectId, ref: Plazo, required: true },
    estado: Boolean
});


module.exports = mongoose.model('Modalidad', ModalidadSchema);
//mongoose.model('Suscripcion', SuscripcionSchema);