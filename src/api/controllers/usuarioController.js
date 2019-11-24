const usuarioService = require('../../services/usuarioService');
const Usuario = require('../model/usuario');

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
        let user = new Usuario({
                email: req.body.email,
                displayName: req.body.displayName,
                password: req.body.password
            })
            //acá invoco el gravatar antes de que grabe el usuario
        user.avatar = user.gravatar();
        user.save(async err => {
            if (err) return res.status(500).send({
                message: `Error al crear el usuario: ${err}`
            })
            let tokenGenerado = await usuarioService.createToken(user)

            return res.status(200).send({ token: tokenGenerado })
        })
    },

    async signIn(req, res) {
        Usuario.findOne({ email: req.body.email }, (err, user) => {
            if (err) return res.status(500).send({
                message: `Error al ingresar: ${err}`
            })
            if (!user) return res.status(404).send({
                message: `No existe el usuario: ${req.body.email}`
            })

            return user.comparePassword(req.body.password,
                async(err, isMatch) => {
                    if (err) return res.status(500).send({ message: `Error al ingresar: ${err}` })
                    if (!isMatch) return res.status(404).send({ message: `Error de contraseña: ${req.body.email}` })

                    req.user = user
                    let tokenGenerado = await usuarioService.createToken(user)
                    return res.status(200).send({
                        message: 'Te has logueado correctamente',
                        token: tokenGenerado
                    })
                });
        }).select('_id email password');
    }

};