const Router = require('express-promise-router').default;

const registroController = require('../controllers/registroController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth.isAuth, registroController.getRegistros);
router.get('/:id', auth.isAuth, registroController.getRegistro);
router.post('/', registroController.saveRegistro);
router.delete('/:id', auth.isAuth, registroController.deleteRegistro);
router.put('/:id', auth.isAuth, registroController.editRegistro);
router.get('/populates/all', auth.isAuth, registroController.getPopulates);
router.get('/populates/all/:id', auth.isAuth, registroController.getPopulatesId);

module.exports = router;