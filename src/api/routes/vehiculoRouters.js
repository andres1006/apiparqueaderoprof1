const Router = require('express-promise-router').default;

const vehiculoController = require('../controllers/vehiculoController');

const router = Router();

router.get('/', vehiculoController.getVehiculos);
router.get('/:id', vehiculoController.getVehiculo);
router.post('/', vehiculoController.saveVehiculo);


module.exports = router;