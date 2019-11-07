// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MotoSchema = new Schema({
    //atributos
    placa: String,
    referencia: String,
    estado: Boolean
});

mongoose.model('Moto', MotoSchema);