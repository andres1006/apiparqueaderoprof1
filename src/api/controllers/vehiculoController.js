const VehiculoService = require('../../services/vehiculoService');

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
};