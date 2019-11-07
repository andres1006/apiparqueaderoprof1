// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

const Producto = require('../model/producto')


const VentaSchema = new Schema({
    //atributos
    producto: { type: Schema.Types.ObjectId, ref: Producto, required: true },
    cantidad: String,
    total: Number,
    estado: Boolean
});



mongoose.model('Venta', VentaSchema);