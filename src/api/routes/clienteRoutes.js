const Router = require('express-promise-router').default;
const clienteController = require('../controllers/clienteController');
const auth = require('../middlewares/auth');

const router = Router();


router.get('/', auth.isAuth, clienteController.getClientes);
router.get('/:id', auth.isAuth, clienteController.getCliente);
router.post('/', clienteController.saveCliente);

module.exports = router;