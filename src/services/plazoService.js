'use strict'
const mongoose = require('mongoose');
const Plazo = require('../api/model/plazo')


module.exports = {
    async getAllPlazos() {
        const plazo = await Plazo.find();

        return plazo;
    },

    async getPlazoById(id) {
        const plazo = await Plazo.findById(id);

        return plazo;
    },
};