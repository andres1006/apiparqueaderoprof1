const VehiculoService = require('../../services/vehiculoService');
const Vehiculo = require('../model/vehiculo');

module.exports = {
    async getVehiculos(req, res, next) {
        const vehiculos = await VehiculoService.getAllVehiculos();

        return res.status(200).send({ vehiculos });
    },

    async getVehiculo(req, res, next) {
        const { id } = req.params;

        const vehiculo = await VehiculoService.getVehiculoById(id);

        return res.status(200).send({ vehiculo });
    },

    async saveVehiculo(req, res, next) {
        let vehiculoRecibido = new Vehiculo()
        vehiculoRecibido.placa = req.body.placa,
            vehiculoRecibido.cliente = req.body.cliente,
            vehiculoRecibido.tipoVehiculo = req.body.tipoVehiculo,
            vehiculoRecibido.estado = req.body.estado

        const vehiculoAlmacenado = await VehiculoService.saveVehiculo(vehiculoRecibido);

        return res.status(200).send({ vehiculoAlmacenado });
    },

};