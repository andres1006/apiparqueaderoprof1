const Router = require('express-promise-router').default;

const plazoController = require('../controllers/plazoController');

const router = Router();

router.get('/', plazoController.getPlazos);
router.get('/:id', plazoController.getPlazo);
router.post('/', plazoController.savePlazo);


module.exports = router;