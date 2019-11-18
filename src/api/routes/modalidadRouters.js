const Router = require('express-promise-router').default;

const modalidadController = require('../controllers/modalidadnController');

const router = Router();

router.get('/', modalidadController.getModalidades);
router.get('/:id', modalidadController.getModalidad);
router.post('/', modalidadController.saveModalidad);


module.exports = router;