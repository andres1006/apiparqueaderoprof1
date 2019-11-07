// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    //atributos
    descripcion: String,
    stock: Number,
    precio: Number,
    estado: Boolean
});

mongoose.model('Producto', ProductoSchema);