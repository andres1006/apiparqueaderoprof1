// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SuscripcionSchema = new Schema({
    //atributos
    descripcion: String,
    valor: String,
    plazo: Number,
    estado: Boolean
});

mongoose.model('Suscripcion', SuscripcionSchema);