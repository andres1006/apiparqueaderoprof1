const Router = require('express-promise-router').default;

const usuarioController = require('../controllers/usuarioController');

const router = Router();

router.get('/', usuarioController.getUsuarios);
router.get('/:id', usuarioController.getUsuario);
router.post('/', usuarioController.saveUsuario);


module.exports = router;