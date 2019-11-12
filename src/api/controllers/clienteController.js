const ClienteService = require('../../services/clienteService');

module.exports = {
    async getClientes(req, res, next) {
        const clientes = await ClienteService.getAlClienteServices();

        return res.status(200).send({ clientes });
    },

    async getCliente(req, res, next) {
        const { id } = req.params;

        const cliente = await ClienteService.geClienteServiceById(id);

        return res.status(200).send({ cliente });
    },
};