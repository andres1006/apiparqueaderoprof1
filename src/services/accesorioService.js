'use strict'

const mongoose = require('mongoose');
const Objeto = require('../api/model/Objeto')


module.exports = {
    async getAllObjetos() {
        const Objeto = await Objeto.find();

        return Objeto;
    },

    async getObjetoById(id) {
        const Objeto = await Objeto.findById(id);

        return Objeto;
    },
};