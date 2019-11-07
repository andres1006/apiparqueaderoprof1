const AccesorioService = require('../../services/accesorioService');

module.exports = {
    async getTipoAnimals(req, res, next) {
        const accesorio = await AccesorioService.getAllAccesorioServices();

        return res.status(200).send({ accesorio });
    },

    async getTipoAnimal(req, res, next) {
        const { id } = req.params;

        const accesorio = await AccesorioService.getAccesorioServiceById(id);

        return res.status(200).send({ accesorio });
    },
};