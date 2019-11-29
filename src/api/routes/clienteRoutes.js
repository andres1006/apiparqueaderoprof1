const Router = require('express-promise-router').default;
const clienteController = require('../controllers/clienteController');
const auth = require('../middlewares/auth');

const router = Router();


router.get('/', auth.isAuth, clienteController.getClientes);
router.get('/:id', auth.isAuth, clienteController.getCliente);
router.post('/', clienteController.saveCliente);
router.delete('/:id', auth.isAuth, clienteController.deleteCliente);
router.put('/:id', auth.isAuth, clienteController.editCliente);

module.exports = router;