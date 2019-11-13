const RegistroService = require('../../services/registroService');

module.exports = {
    async getRegistros(req, res, next) {
        const registros = await RegistroService.getAllRegistroServices();

        return res.status(200).send({ registros });
    },

    async getRegistro(req, res, next) {
        const { id } = req.params;

        const registro = await RegistroService.getRegistroServiceById(id);

        return res.status(200).send({ registro });
    },
};