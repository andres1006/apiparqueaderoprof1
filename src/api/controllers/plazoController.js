const PlazoService = require('../../services/plazoService');

module.exports = {
    async getPlazos(req, res, next) {
        const plazos = await PlazoService.getAllPlazoServices();

        return res.status(200).send({ plazos });
    },

    async getPlazo(req, res, next) {
        const { id } = req.params;

        const plazo = await PlazoService.getPlazoServiceById(id);

        return res.status(200).send({ plazo });
    },
};