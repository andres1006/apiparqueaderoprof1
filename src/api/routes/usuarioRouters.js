const Router = require('express-promise-router').default;
const usuarioController = require('../controllers/usuarioController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth.isAuth, usuarioController.getUsuarios);
router.get('/:id', auth.isAuth, usuarioController.getUsuario);
router.post('/registrar', usuarioController.signUp);
router.post('/autenticar', usuarioController.signIn);
router.delete('/:id', auth.isAuth, usuarioController.deleteUsuario);
router.put('/:id', auth.isAuth, usuarioController.editUsuario);
router.post('/restorepass', usuarioController.restorePass);

module.exports = router;