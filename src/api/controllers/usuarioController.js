const UsuarioService = require('../../services/usuarioService');
const Usuario = require('../model/usuario');

module.exports = {
    async getUsuarios(req, res, next) {
        const usuarios = await UsuarioService.getAllUsuarios();

        return res.status(200).send({ usuarios });
    },

    async getUsuario(req, res, next) {
        const { id } = req.params;

        const usuario = await UsuarioService.getUsuarioById(id);

        return res.status(200).send({ usuario });
    },

    async saveUsuario(req, res, next) {
        let usuarioRecibido = new Usuario()
        usuarioRecibido.email = req.body.email,
            usuarioRecibido.tipoUsuario = req.body.tipoUsuario,
            usuarioRecibido.displayName = req.body.displayName,
            usuarioRecibido.password = req.body.password,
            usuarioRecibido.signupDate = req.body.signupDate,
            usuarioRecibido.lastLogin = req.body.lastLogin

        const usuarioAlmacenado = await UsuarioService.saveUsuario(usuarioRecibido);

        return res.status(200).send({ usuarioAlmacenado });
    },

};