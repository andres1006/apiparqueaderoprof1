const Router = require('express-promise-router').default;

const vehiculoController = require('../controllers/vehiculoController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth.isAuth, vehiculoController.getVehiculos);
router.get('/:id', auth.isAuth, vehiculoController.getVehiculo);
router.post('/', vehiculoController.saveVehiculo);
router.delete('/:id', auth.isAuth, vehiculoController.deleteVehiculo);
router.put('/:id', auth.isAuth, vehiculoController.editVehiculo);

module.exports = router;