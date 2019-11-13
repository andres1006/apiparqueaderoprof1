// Example model

'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ObjetoSchema = new Schema({
    //atributos
    nombre: String,
    descripcion: Number,
});


module.exports = mongoose.model('Objeto', ObjetoSchema);
//mongoose.model('Objeto', ObjetoSchema);