require('dotenv').config();

const { checkEnvironmentVariables } = require('../utils/env');

const envVariables = ['APIPARQUEADEROPROF1_JWT_SECRET'];

checkEnvironmentVariables(envVariables);

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';
const isDevelopment = !isProduction;
const isTest = env === 'test';

module.exports = {
    // Server options
    host: '0.0.0.0',
    port: parseInt(process.env.PORT, 10) || 8080,

    // Application environment
    env,
    isProduction,
    isDevelopment,
    isTest,
    db: process.env.MONGODB_URI || 'mongodb://andres931006:andres1006@cluster0-shard-00-00-64h2t.mongodb.net:27017,cluster0-shard-00-01-64h2t.mongodb.net:27017,cluster0-shard-00-02-64h2t.mongodb.net:27017/parqueadero?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',

    // JWT config
    JWT: {
        algorithm: 'HS256',
        accessTokenExpiryTime: 900, // 15 minutes
        refreshTokenExpiryTime: 3600, // 1 hour
        secret: process.env.APIPARQUEADEROPROF1_JWT_SECRET,
    },
};