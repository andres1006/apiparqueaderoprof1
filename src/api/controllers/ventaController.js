const VentaService = require('../../services/ventaService');

module.exports = {
    async getVentas(req, res, next) {
        const ventas = await VentaService.getAllVentaServices();

        return res.status(200).send({ ventas });
    },

    async getVenta(req, res, next) {
        const { id } = req.params;

        const venta = await VentaService.getVentaServiceById(id);

        return res.status(200).send({ venta });
    },
};