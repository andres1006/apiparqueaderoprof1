const AccesorioService = require('../../services/accesorioService');

module.exports = {
    async getAccesorios(req, res, next) {
        const accesorios = await AccesorioService.getAllAccesorioServices();

        return res.status(200).send({ accesorios });
    },

    async getAccesorio(req, res, next) {
        const { id } = req.params;

        const accesorio = await AccesorioService.getAccesorioServiceById(id);

        return res.status(200).send({ accesorio });
    },
};