// eslint-disable-file no-use-before-define 
const bodyParser = require('body-parser');
const express = require('express');
const expressErrorHandler = require('@kazaar/express-error-handler');
const helmet = require('helmet');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


const { host, port, env, db } = require('./config');
const logger = require('./config/logger');

const { httpErrorHandler, handleServerError, celebrateErrorParser } = expressErrorHandler(logger);
const api = require('./api');

//const nodemailer = require('nodemailer');
/**
 * Express server initialization
 */

app.use(cors());
app.set('host', host);
app.set('port', port);
//app.use('/nodemailer', nodemailer);
/**
 * Application configuration
 */
app.use(bodyParser.json());
app.use(helmet());

/**
 * API routes
 */
app.use('/api', api);

/**
 * Base route
 */
app.get('/', (req, res) => res.sendStatus(200));

/**
 * Error handling
 */
Error.stackTraceLimit = 10;

app.use(celebrateErrorParser);
app.use(httpErrorHandler);

/**
 * Server start
 */
mongoose.connect(db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`);
    }
    console.log('Conexión a la base de datos establecida...');

    app
        .listen(port, host, () => {
            logger.info(`App is running at ${host}:${port} in ${env} mode`);
        })
        .on('error', handleServerError);
});

module.exports = app;