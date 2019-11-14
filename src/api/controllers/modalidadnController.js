const ModalidadService = require('../../services/modalidadService');
const Modalidad = require('../model/modalidad');

module.exports = {
    async getModalidades(req, res, next) {
        const modalidades = await ModalidadService.getAllModalidades();

        return res.status(200).send({ modalidades });
    },

    async getModalidad(req, res, next) {
        const { id } = req.params;

        const modalidad = await ModalidadService.getModalidadById(id);

        return res.status(200).send({ modalidad });
    },

    async saveModalidad(req, res, next) {
        let modalidadRecibido = new Modalidad()
        modalidadRecibido.descripcion = req.body.descripcion,
            modalidadRecibido.plazo = req.body.plazo,
            modalidadRecibido.estado = req.body.estado

        const modalidadAlmacenado = await ModalidadService.saveModalidad(modalidadRecibido);

        return res.status(200).send({ modalidadAlmacenado });
    },

};