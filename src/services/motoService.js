'use strict'
const mongoose = require('mongoose');
const Moto = require('../api/model/moto')


module.exports = {
    async getAllMotos() {
        const moto = await Moto.find();

        return moto;
    },

    async getMotoById(id) {
        const moto = await Moto.findById(id);

        return moto;
    },
};