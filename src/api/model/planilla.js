// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cliente = require('../model/cliente')
const Moto = require('../model/moto')
const Suscripcion = require('../model/suscripcion')
const Accesorio = require('../model/accesorio')


const PlanillaSchema = new Schema({
    //atributo
    cliente: { type: Schema.Types.ObjectId, ref: Cliente, required: true },
    moto: { type: Schema.Types.ObjectId, ref: Moto, required: true },
    suscripcion: { type: Schema.Types.ObjectId, ref: Suscripcion, required: true },
    accesorio: { type: Schema.Types.ObjectId, ref: Accesorio, required: true },
    horaentrada: { type: String, required: true },
    horasalida: String,
    pago: Number

});

mongoose.model('Planilla', PlanillaSchema);