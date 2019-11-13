const RegistroService = require('../../services/registroService');

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
};