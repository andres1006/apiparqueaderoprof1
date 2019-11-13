const Router = require('express-promise-router').default;

const plazoController = require('../controllers/plazoController');

const router = Router();

router.get('/', plazoController.getPlazos);
router.get('/:id', plazoController.getPlazo);

module.exports = router;