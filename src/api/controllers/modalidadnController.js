const ModalidadService = require('../../services/modalidadService');

module.exports = {
    async getModalidades(req, res, next) {
        const modalidades = await ModalidadService.getAllModalidadServices();

        return res.status(200).send({ modalidades });
    },

    async getModalidad(req, res, next) {
        const { id } = req.params;

        const modalidad = await ModalidadService.getModalidadServiceById(id);

        return res.status(200).send({ modalidad });
    },
};