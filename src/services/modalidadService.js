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

    async saveModalidad(modalidadreq) {
        const modalidadAlmacenado = await modalidadreq.save();

        return modalidadAlmacenado;
    },

    async deleteModalidad(id) {
        const modalidadDeleted = await Modalidad.findByIdAndDelete(id);
        return modalidadDeleted;
    },

    async editModalidad(id, modalidadact) {
        const modalidadActualizado = await Modalidad.findByIdAndUpdate(id, modalidadact);

        return modalidadActualizado;
    }



};