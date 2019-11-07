'use strict'
const mongoose = require('mongoose');
const Suscripcion = require('../api/model/suscripcion')


module.exports = {
    async getAllSuscripcions() {
        const suscripcion = await Suscripcion.find();

        return suscripcion;
    },

    async getSuscripcionById(id) {
        const suscripcion = await Suscripcion.findById(id);

        return suscripcion;
    },
};