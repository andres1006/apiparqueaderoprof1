const { Router } = require('express');
const { NotFound } = require('http-errors');
const morgan = require('morgan');

const logger = require('../config/logger');

const router = Router();

const clientesRouter = require('./routes/clienteRoutes');
const modalidadesRouter = require('./routes/modalidadRouters');
const objetosRouter = require('./routes/objetoRouters');
const plazosRouter = require('./routes/plazoRouters');
const registrosRouter = require('./routes/registroRouters');
const usuariosRouter = require('./routes/usuarioRouters');
const vehiculosRouter = require('./routes/vehiculoRouters');



/**
 * Router configuration
 */
router.use(
    morgan(':status - [:method :url - :remote-addr] :response-time ms', {
        stream: {
            write: message => logger.info(message),
        },
        skip: (req, res) => res.statusCode >= 400,
    })
);

/**
 * API routes
 */
router.get('/', (req, res) => res.sendStatus(200));
router.use('/cliente', clientesRouter);
router.use('/modalidad', modalidadesRouter);
router.use('/objeto', objetosRouter);
router.use('/plazo', plazosRouter);
router.use('/registro', registrosRouter);
router.use('/usuario', usuariosRouter);
router.use('/vehiculo', vehiculosRouter);


/**
 * 404 error handling
 */
router.use((req, res, next) => {
    const { baseUrl, url, method } = req;

    next(new NotFound(`The route '${method} ${baseUrl}${url}' doesn't exist.`));
});

module.exports = router;