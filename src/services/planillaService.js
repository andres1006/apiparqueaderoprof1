'use strict'

const mongoose = require('mongoose');
const Planilla = require('../api/model/planilla')


module.exports = {
    async getAllPlanillas() {
        const planilla = await Planilla.find();

        return planilla;
    },

    async getPlanillaById(id) {
        const planilla = await Planilla.findById(id);

        return planilla;
    },
};