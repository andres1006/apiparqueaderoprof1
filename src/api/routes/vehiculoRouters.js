const Router = require('express-promise-router').default;

const vehiculoController = require('../controllers/vehiculoController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth.isAuth, vehiculoController.getVehiculos);
router.get('/:id', auth.isAuth, vehiculoController.getVehiculo);
router.post('/', vehiculoController.saveVehiculo);

module.exports = router;