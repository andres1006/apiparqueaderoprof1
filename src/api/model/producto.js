// Example model
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    //atributos
    descripcion: String,
    stock: Number,
    precio: Number,
    estado: Boolean
});




module.exports = mongoose.model('Producto', ProductoSchema);
//mongoose.model('Producto', ProductoSchema);