const Router = require('express-promise-router').default;

const registroController = require('../controllers/registroController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth.isAuth, registroController.getRegistros);
router.get('/:id', auth.isAuth, registroController.getRegistro);
router.post('/', registroController.saveRegistro);

module.exports = router;
