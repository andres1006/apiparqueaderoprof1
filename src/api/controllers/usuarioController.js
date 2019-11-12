const UsuarioService = require('../../services/usuarioService');

module.exports = {
    async getUsuarios(req, res, next) {
        const usuarios = await AccesorioService.getAllUsuarioServices();

        return res.status(200).send({ usuarios });
    },

    async getUsuario(req, res, next) {
        const { id } = req.params;

        const usuario = await UsuarioService.getUsuarioServiceById(id);

        return res.status(200).send({ usuario });
    },
};