const PlazoService = require('../../services/plazoService');
const Plazo = require('../model/plazo');

module.exports = {
    async getPlazos(req, res, next) {
        const plazos = await PlazoService.getAllPlazos();

        return res.status(200).send({ plazos });
    },

    async getPlazo(req, res, next) {
        const { id } = req.params;

        const plazo = await PlazoService.getPlazoById(id);

        return res.status(200).send({ plazo });
    },

    async savePlazo(req, res, next) {
        let plazoRecibido = new Plazo()
        plazoRecibido.id = req.body.id,
            plazoRecibido.tiempo = req.body.tiempo,
            plazoRecibido.descripcion = req.body.descripcion,
            plazoRecibido.valor = req.body.valor


        const plazoAlmacenado = await PlazoService.savePlazo(plazoRecibido);

        return res.status(200).send({ plazoAlmacenado });
    },

    async deletePlazo(req, res, next) {
        const { id } = req.params;
        const plazoBorrado = await PlazoService.deletePlazo(id);
        if (plazoBorrado) {
            return res.status(200).send({ plazoBorrado });
        } else {
            return res.status(404).send({ message: "El id ingresado no existe" });
        }
    },

    async editPlazo(req, res, next) {
        const { id } = req.params;
        let update = req.body
        const plazoAnterior = await PlazoService.editPlazo(id, update);
        return res.status(200).send({ plazoAnterior });
    },


};