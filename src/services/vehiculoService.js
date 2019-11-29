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

    async saveVehiculo(vehiculoreq) {
        const vehiculoAlmacenado = await vehiculoreq.save();

        return vehiculoAlmacenado;
    },

    async deleteVehiculo(id) {
        const vehiculoDeleted = await Vehiculo.findByIdAndDelete(id);
        return vehiculoDeleted;
    },

    async editVehiculo(id, vehiculoact) {
        const vehiculoActualizado = await Vehiculo.findByIdAndUpdate(id, vehiculoact);

        return vehiculoActualizado;
    }

};