'use strict'

const mongoose = require('mongoose');
const Accesorio = require('../api/model/accesorio')


module.exports = {
    async getAllAccesorios() {
        const accesorio = await Accesorio.find();

        return accesorio;
    },

    async getAccesorioById(id) {
        const accesorio = await Accesorio.findById(id);

        return accesorio;
    },
};