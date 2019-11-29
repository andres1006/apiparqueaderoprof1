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

    async deleteRegistro(id) {
        const resgistroDeleted = await Registro.findByIdAndDelete(id);
        return resgistroDeleted;
    },

    async editRegistro(id, resgistroact) {
        const resgistroActualizado = await Registro.findByIdAndUpdate(id, resgistroact);

        return resgistroActualizado;
    }

};