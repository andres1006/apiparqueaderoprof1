'use strict'
const mongoose = require('mongoose');
const Usuario = require('../api/model/usuario')


module.exports = {
    async getAllUsuarios() {
        const usuario = await Usuario.find();

        return usuario;
    },

    async getUsuarioById(id) {
        const usuario = await Usuario.findById(id);

        return usuario;
    },

    async saveUsuario(usuarioreq) {
        const usuarioAlmacenado = await usuarioreq.save();

        return usuarioAlmacenado;
    },

};