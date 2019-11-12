'use strict'

const mongoose = require('mongoose');
const Cliente = require('../api/model/cliente');


module.exports = {
    async getAllClientes() {
        const cliente = await Cliente.find();

        return cliente;
    },

    async getClienteById(id) {
        const cliente = await Cliente.findById(id);

        return cliente;
    },
};