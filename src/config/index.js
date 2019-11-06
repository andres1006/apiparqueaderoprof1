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

  // JWT config
  JWT: {
    algorithm: 'HS256',
    accessTokenExpiryTime: 900, // 15 minutes
    refreshTokenExpiryTime: 3600, // 1 hour
    secret: process.env.APIPARQUEADEROPROF1_JWT_SECRET,
  },
};
