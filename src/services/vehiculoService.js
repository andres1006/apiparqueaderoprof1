'use strict'
const mongoose = require('mongoose');
const Vehiculo = require('../api/model/vehiculo')


module.exports = {
    async getAllVehiculos() {
        const vehiculo = await Vehiculo.find();

        return vehiculo;
    },

    async getVehiculoById(id) {
        const vehiculo = await Vehiculo.findById(id);

        return vehiculo;
    },
};