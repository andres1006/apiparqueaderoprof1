'use strict'

const mongoose = require('mongoose');
const Objeto = require('../api/model/objeto');


module.exports = {
    async getAllObjetos() {
        const objeto = await Objeto.find();

        return objeto;
    },

    async getObjetoById(id) {
        const objeto = await Objeto.findById(id);

        return objeto;
    },
};