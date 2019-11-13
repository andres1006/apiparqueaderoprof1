'use strict'

const mongoose = require('mongoose');
const Modalidad = require('../api/model/modalidad')


module.exports = {
    async getAllModalidades() {
        const modalidad = await Modalidad.find();

        return modalidad;
    },

    async getModalidadById(id) {
        const modalidad = await Modalidad.findById(id);

        return modalidad;
    },
};