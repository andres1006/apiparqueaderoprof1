const Router = require('express-promise-router').default;
const usuarioController = require('../controllers/usuarioController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth.isAuth, usuarioController.getUsuarios);
router.get('/:id', auth.isAuth, usuarioController.getUsuario);
router.post('/registrar', usuarioController.signUp);
router.post('/autenticar', usuarioController.signIn);
router.delete('/:id', auth.isAuth, usuarioController.deleteUsuario);
router.post('/restorepass', usuarioController.restorePass);
router.put('/:id', auth.isAuth, usuarioController.editUsuario);
router.put('/editPassword/:id', auth.isAuth, usuarioController.editPassword);

module.exports = router;