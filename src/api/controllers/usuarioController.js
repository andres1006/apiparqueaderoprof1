const usuarioService = require('../../services/usuarioService');
const Usuario = require('../model/usuario');
const EmailCtrl = require('../controllers/emailController');
const crypto = require('crypto');

const bcrypt = require('bcrypt-nodejs');

module.exports = {
    async getUsuarios(req, res, next) {
        const usuarios = await usuarioService.getAllUsuarios();

        return res.status(200).send({ usuarios });
    },

    async getUsuario(req, res, next) {
        const { id } = req.params;

        const usuario = await usuarioService.getUsuarioById(id);

        return res.status(200).send({ usuario });
    },

    /*  async saveUsuario(req, res, next) {
           let usuarioRecibido = new Usuario()
           usuarioRecibido.email = req.body.email,
               usuarioRecibido.displayName = req.body.displayName,
               usuarioRecibido.avatar = req.body.avatar,
               usuarioRecibido.password = req.body.password,
               usuarioRecibido.signupDate = req.body.signupDate,
               usuarioRecibido.lastLogin = req.body.lastLogin

           const usuarioAlmacenado = await UsuarioService.saveUsuario(usuarioRecibido);

           return res.status(200).send({ usuarioAlmacenado });
       }, */

    async signUp(req, res) {
        const user = new Usuario({
            email: req.body.email,
            displayName: req.body.displayName,
            password: req.body.password,
        });

        // acá invoco el gravatar antes de que grabe el usuario
        user.avatar = user.gravatar();
        user.save(async err => {
            if (err)
                return res.status(500).send({
                    message: `Error al crear el usuario: ${err}`,
                });
            const tokenGenerado = await usuarioService.createToken(user);
            EmailCtrl.sendEmail(req.body.email, "Gracias, Se registro correctamente, ahora puedes iniciar sesion");
            return res.status(200).send({ token: tokenGenerado });
        });
    },


    async signIn(req, res) {
        Usuario.findOne({ email: req.body.email }, (err, user) => {
            if (err)
                return res.status(500).send({
                    message: `Error al ingresar: ${err}`,
                });
            if (!user)
                return res.status(404).send({
                    message: `No existe el usuario: ${req.body.email}`,
                });

            return user.comparePassword(req.body.password, async(err, isMatch) => {
                if (err) return res.status(500).send({ message: `Error al ingresar: ${err}` });
                if (!isMatch) return res.status(404).send({ message: `Error de contraseña: ${req.body.email}` });

                req.user = user;
                const tokenGenerado = await usuarioService.createToken(user);

                EmailCtrl.sendEmail(req.body.email, "Haz Ingresado correctamente al portal parquadero");
                return res.status(200).send({
                    message: 'Te has logueado correctamente',
                    token: tokenGenerado,
                });
            });
        }).select('_id email password');
    },

    async deleteUsuario(req, res, next) {
        const { id } = req.params;
        const usuarioBorrado = await usuarioService.deleteUsuario(id);
        if (usuarioBorrado) {
            return res.status(200).send({ usuarioBorrado });
        } else {
            return res.status(404).send({ message: "El id ingresado no existe" });
        }
    },

    async editUsuario(req, res, next) {

        if (req.body.password) {
            const { id } = req.params;
            console.log("id =  " + id);
            let update = req.body
            console.log("pass 1 =  " + update.password);

            bcrypt.genSalt(10, async(err, salt) => {
                if (err) return next(err);
                bcrypt.hash(update.password, salt, null, (err, hash) => {
                    if (err) return next(err);
                    update.password = hash;
                    console.log("pass 2 =  " + update.password);
                    console.log("pass 3" + update.password);

                    const usuarioAnterior = usuarioService.passUsuario(id, update);
                    return res.status(200).send({ usuarioAnterior });
                    next();
                });
            });
        } else {
            const { id } = req.params;
            let update = req.body

            const usuarioAnterior = await usuarioService.editUsuario(id, update);
            return res.status(200).send({ usuarioAnterior });
        }

    },

    async editPassword(req, res, next) {

        const { id } = req.params;
        let update = req.body


        bcrypt.genSalt(10, async(err, salt) => {
            if (err) return next(err);
            bcrypt.hash(update.password, salt, null, (err, hash) => {
                if (err) return next(err);
                update.password = hash;

                const usuarioAnterior = usuarioService.passUsuario(id, update);
                return res.status(200).send({ usuarioAnterior });
                next();
            });
        });
    },

    async restorePass(req, res, next) {
        Usuario.findOne({ email: req.body.email }, async(err, user) => {
            if (err)
                return res.status(500).send({
                    message: `Error al ingresar: ${err}`,
                });
            if (!user)
                return res.status(404).send({
                    message: `No existe el usuario: ${req.body.email}`,
                });


            req.user = user;
            const tokenGenerado = await usuarioService.createToken(user);

            EmailCtrl.sendEmail(req.body.email, "Cambiar contraseña  " + tokenGenerado.access_token);
            return res.status(200).send({
                message: 'Te has logueado correctamente',
                token: tokenGenerado,
            });

        }).select('_id email');
    },

};