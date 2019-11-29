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

    async saveCliente(clientereq) {
        const clienteAlmacenado = await clientereq.save();

        return clienteAlmacenado;
    },

    async deleteCliente(id) {
        const clienteDeleted = await Cliente.findByIdAndDelete(id);
        return clienteDeleted;
    },

    async editCliente(id, clienteact) {
        const clienteActualizado = await Cliente.findByIdAndUpdate(id, clienteact);

        return clienteActualizado;
    }


};