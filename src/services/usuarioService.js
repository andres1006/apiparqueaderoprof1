const moment = require('moment');
const Usuario = require('../api/model/usuario');
const jwt = require('../utils/jwt');

module.exports = {
    async getAllUsuarios() {
        const usuario = await Usuario.find();

        return usuario;
    },

    async getUsuarioById(id) {
        const usuario = await Usuario.findById(id);

        return usuario;
    },

    async saveUsuario(usuarioreq) {
        const usuarioAlmacenado = await usuarioreq.save();

        return usuarioAlmacenado;
    },

    async createToken(usuario) {
        const payload = {
            sub: usuario._id,
            iat: moment().unix(),
            // exp:  moment().add(accessTokenExpiryTime/60/60/24,'days').unix()
        };

        return await jwt.generateToken(payload, payload);
    },

    async decodeToken(token) {
        const decoded = new Promise((resolve, reject) => {
            try {
                const payload = jwt.getDecodedToken(token);

                if (payload.exp <= moment().unix()) {
                    reject({
                        status: 401,
                        message: 'El token ha expirado',
                    });
                }
                resolve(payload.sub);
            } catch (err) {
                reject({
                    status: 500,
                    message: 'Token no válido',
                });
            }
        });

        return decoded;
    },
};