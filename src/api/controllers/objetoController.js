const ObjetoService = require('../../services/objetoService');
const Objeto = require('../model/objeto');

module.exports = {
    async getObjetos(req, res, next) {
        const objetos = await ObjetoService.getAllObjetos();

        return res.status(200).send({ objetos });
    },

    async getObjeto(req, res, next) {
        const { id } = req.params;

        const objeto = await ObjetoService.getObjetoById(id);

        return res.status(200).send({ objeto });
    },

    async saveObjeto(req, res, next) {
        let objetoRecibido = new Objeto()
        objetoRecibido.nombre = req.body.nombre,
            objetoRecibido.descripcion = req.body.descripcion

        const objetoAlmacenado = await ObjetoService.saveObjeto(objetoRecibido);

        return res.status(200).send({ objetoAlmacenado });
    },

};