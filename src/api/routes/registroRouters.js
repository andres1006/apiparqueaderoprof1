const Router = require('express-promise-router').default;

const registroController = require('../controllers/registroController');

const router = Router();

router.get('/', registroController.getRegistros);
router.get('/:id', registroController.getRegistro);

module.exports = router;