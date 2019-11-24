const nodemailer = require('nodemailer');
// email sender function
module.exports = {

    async sendEmail(email, mensaje, req, res) {
        // Definimos el transporter
        console.log('entre a enviar correo');
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "andresagudelo1006@gmail.com",
                pass: "andres1006"
            }
        });
        // Definimos el email
        const mailOptions = {
            from: 'ParqueaderoApi',
            to: email,
            subject: 'Mensaje de' + mensaje,
            text: mensaje
        };
        // Enviamos el email
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
                res.send(500, err.message);
            } else {
                console.log("Email sent");
                res.status(200).jsonp(req.body);
            }
        });
    },

};