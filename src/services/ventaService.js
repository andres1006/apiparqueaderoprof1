'use strict'
const mongoose = require('mongoose');
const Venta = require('../api/model/venta')


module.exports = {
    async getAllVentas() {
        const venta = await Venta.find();

        return venta;
    },

    async getVentaById(id) {
        const venta = await Venta.findById(id);

        return venta;
    },
};