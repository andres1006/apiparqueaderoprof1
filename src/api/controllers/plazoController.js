const PlazoService = require('../../services/plazoService');

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
};