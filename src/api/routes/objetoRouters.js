const Router = require('express-promise-router').default;

const objetoController = require('../controllers/objetoController');

const router = Router();

router.get('/', objetoController.getObjetos);
router.get('/:id', objetoController.getObjeto);
router.post('/', objetoController.saveObjeto);


module.exports = router;