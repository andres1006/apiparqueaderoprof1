const MotoService = require('../../services/motoService');

module.exports = {
    async getMotos(req, res, next) {
        const motos = await MotoService.getAllMotoServices();

        return res.status(200).send({ motos });
    },

    async getMoto(req, res, next) {
        const { id } = req.params;

        const moto = await MotoService.getMotoServiceById(id);

        return res.status(200).send({ moto });
    },
};