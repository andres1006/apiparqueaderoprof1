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

    async savePlazo(plazoreq) {
        const plazoAlmacenado = await plazoreq.save();

        return plazoAlmacenado;
    },

    async deletePlazo(id) {
        const plazoDeleted = await Plazo.findByIdAndDelete(id);
        return plazoDeleted;
    },

    async editPlazo(id, plazoact) {
        const plazoActualizado = await Plazo.findByIdAndUpdate(id, plazoact);

        return plazoActualizado;
    }

};