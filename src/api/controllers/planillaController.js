const PlanillaService = require('../../services/planillaService');

module.exports = {
    async getPlanillas(req, res, next) {
        const planillas = await PlanillaService.getAllPlanillaServices();

        return res.status(200).send({ planillas });
    },

    async getPlanilla(req, res, next) {
        const { id } = req.params;

        const planilla = await PlanillaService.getPlanillaServiceById(id);

        return res.status(200).send({ planilla });
    },
};