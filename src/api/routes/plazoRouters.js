const Router = require('express-promise-router').default;

const plazoController = require('../controllers/plazoController');
const auth = require('../middlewares/auth')

const router = Router();

router.get('/', auth.isAuth, plazoController.getPlazos);
router.get('/:id', auth.isAuth, plazoController.getPlazo);
router.post('/', plazoController.savePlazo);


module.exports = router;