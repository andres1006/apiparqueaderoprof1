// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AccesorioSchema = new Schema({
    //atributos
    descripcion: String,
    cantidad: Number,
    observacion: String
});


mongoose.model('Accesorio', AccesorioSchema);