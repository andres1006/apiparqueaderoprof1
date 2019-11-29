const Router = require('express-promise-router').default;

const modalidadController = require('../controllers/modalidadnController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth.isAuth, modalidadController.getModalidades);
router.get('/:id', auth.isAuth, modalidadController.getModalidad);
router.post('/', modalidadController.saveModalidad);
router.delete('/:id', auth.isAuth, modalidadController.deleteModalidad);
router.put('/:id', auth.isAuth, modalidadController.editModalidad);

module.exports = router;