const RegistroService = require('../../services/registroService');
const Registro = require('../model/registro');



module.exports = {
    async getRegistros(req, res, next) {
        const registros = await RegistroService.getAllRegistros();

        return res.status(200).send({ registros });
    },

    async getRegistro(req, res, next) {
        const { id } = req.params;

        const registro = await RegistroService.getRegistroById(id);

        return res.status(200).send({ registro });
    },

    async saveRegistro(req, res, next) {
        let registroRecibido = new Registro()
        registroRecibido.id = req.body.id,
            registroRecibido.fechavehiculo = req.body.fechavehiculo,
            registroRecibido.vehiculo = req.body.vehiculo,
            registroRecibido.objeto = req.body.objeto,
            registroRecibido.usuario = req.body.usuario,
            registroRecibido.horaEntrada = req.body.horaEntrada,
            registroRecibido.horaSalida = req.body.horaSalida,
            registroRecibido.descripcion = req.body.descripcion,
            registroRecibido.estado = req.body.estado,
            registroRecibido.totalPago = req.body.totalPago

        const registroAlmacenado = await RegistroService.saveRegistro(registroRecibido);

        return res.status(200).send({ registroAlmacenado });
    },

    async deleteRegistro(req, res, next) {
        const { id } = req.params;
        const registroBorrado = await RegistroService.deleteRegistro(id);
        if (registroBorrado) {
            return res.status(200).send({ registroBorrado });
        } else {
            return res.status(404).send({ message: "El id ingresado no existe" });
        }
    },

    async editRegistro(req, res, next) {
        const { id } = req.params;
        let update = req.body
        const registroAnterior = await RegistroService.editRegistro(id, update);
        return res.status(200).send({ registroAnterior });
    },

    async getPopulates(req, res, next) {
        const registros = await RegistroService.getPopulate();
        return res.status(200).send({ registros });
    },
    async getPopulatesId(req, res, next) {
        const { id } = req.params;
        const registros = await RegistroService.getPopulateId(id);
        return res.status(200).send({ registros });
    },








};