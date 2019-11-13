// Example model
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    //atributos
    id: String,
    tiempo: String,
    descripcion: String,
    valor: Number
});




module.exports = mongoose.model('Producto', ProductoSchema);
//mongoose.model('Producto', ProductoSchema);