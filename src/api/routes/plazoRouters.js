const Router = require('express-promise-router').default;

const plazoController = require('../controllers/plazoController');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth.isAuth, plazoController.getPlazos);
router.get('/:id', auth.isAuth, plazoController.getPlazo);
router.post('/', plazoController.savePlazo);
router.delete('/:id', auth.isAuth, plazoController.deletePlazo);
router.put('/:id', auth.isAuth, plazoController.editPlazo);

module.exports = router;