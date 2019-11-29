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

    async deleteObjeto(req, res, next) {
        const { id } = req.params;
        const objetoBorrado = await ObjetoService.deleteObjeto(id);
        if (objetoBorrado) {
            return res.status(200).send({ objetoBorrado });
        } else {
            return res.status(404).send({ message: "El id ingresado no existe" });
        }
    },

    async editObjeto(req, res, next) {
        const { id } = req.params;
        let update = req.body
        const objetoAnterior = await ObjetoService.editObjeto(id, update);
        return res.status(200).send({ objetoAnterior });
    },


};