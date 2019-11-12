const ProductoService = require('../../services/productoService');

module.exports = {
    async getProductos(req, res, next) {
        const productos = await ProductoService.getAllProductoServices();

        return res.status(200).send({ productos });
    },

    async getProducto(req, res, next) {
        const { id } = req.params;

        const producto = await ProductoService.getProductoServiceById(id);

        return res.status(200).send({ producto });
    },
};