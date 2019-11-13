const ClienteService = require('../../services/clienteService');

module.exports = {
    async getClientes(req, res, next) {
        const clientes = await ClienteService.getAllClientes();

        return res.status(200).send({ clientes });
    },

    async getCliente(req, res, next) {
        const { id } = req.params;

        const cliente = await ClienteService.getClienteById(id);

        return res.status(200).send({ cliente });
    },
};