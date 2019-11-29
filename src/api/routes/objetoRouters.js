const Router = require('express-promise-router').default;

const objetoController = require('../controllers/objetoController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth.isAuth, objetoController.getObjetos);
router.get('/:id', auth.isAuth, objetoController.getObjeto);
router.post('/', objetoController.saveObjeto);
router.delete('/:id', auth.isAuth, objetoController.deleteObjeto);
router.put('/:id', auth.isAuth, objetoController.editObjeto);

module.exports = router;