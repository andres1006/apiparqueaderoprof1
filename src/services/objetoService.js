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

    async saveObjeto(objetoreq) {
        const objetoAlmacenado = await objetoreq.save();

        return objetoAlmacenado;
    },

    async deleteObjeto(id) {
        const objetoDeleted = await Objeto.findByIdAndDelete(id);
        return objetoDeleted;
    },

    async editObjeto(id, objetoact) {
        const objetoActualizado = await Objeto.findByIdAndUpdate(id, objetoact);

        return objetoActualizado;
    }

};