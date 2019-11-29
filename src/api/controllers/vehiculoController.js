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

    async deleteVehiculo(req, res, next) {
        const { id } = req.params;
        const vehiculoBorrado = await VehiculoService.deleteVehiculo(id);
        if (vehiculoBorrado) {
            return res.status(200).send({ vehiculoBorrado });
        } else {
            return res.status(404).send({ message: "El id ingresado no existe" });
        }
    },

    async editVehiculo(req, res, next) {
        const { id } = req.params;
        let update = req.body
        const vehiculoAnterior = await VehiculoService.editVehiculo(id, update);
        return res.status(200).send({ vehiculoAnterior });
    },


};