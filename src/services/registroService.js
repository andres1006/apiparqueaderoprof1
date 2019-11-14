'use strict'

const mongoose = require('mongoose');
const Registro = require('../api/model/registro')


module.exports = {
    async getAllRegistros() {
        const registro = await Registro.find();

        return registro;
    },

    async getRegistroById(id) {
        const registro = await Registro.findById(id);

        return registro;
    },

    async saveRegistro(registroreq) {
        const registroAlmacenado = await registroreq.save();

        return registroAlmacenado;
    },

};