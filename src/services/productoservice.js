'use strict'
const mongoose = require('mongoose');
const Producto = require('../api/model/producto')


module.exports = {
    async getAllProductos() {
        const producto = await Producto.find();

        return producto;
    },

    async getProductoById(id) {
        const producto = await Producto.findById(id);

        return Producto;
    },
};