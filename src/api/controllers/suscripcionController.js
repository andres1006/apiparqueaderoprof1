const SuscripcionService = require('../../services/suscripcionService');

module.exports = {
    async getSuscripciones(req, res, next) {
        const suscripciones = await SuscripcionService.getAllSuscripcionServices();

        return res.status(200).send({ suscripciones });
    },

    async getSuscripcion(req, res, next) {
        const { id } = req.params;

        const suscripcion = await SuscripcionService.getSuscripcionServiceById(id);

        return res.status(200).send({ suscripcion });
    },
};