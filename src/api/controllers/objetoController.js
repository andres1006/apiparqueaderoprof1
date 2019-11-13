const ObjetoService = require('../../services/objetoService');

module.exports = {
    async getObjetos(req, res, next) {
        const objetos = await ObjetoService.getAllObjetoServices();

        return res.status(200).send({ objetos });
    },

    async getObjeto(req, res, next) {
        const { id } = req.params;

        const objeto = await ObjetoService.getObjetoServiceById(id);

        return res.status(200).send({ objeto });
    },
};