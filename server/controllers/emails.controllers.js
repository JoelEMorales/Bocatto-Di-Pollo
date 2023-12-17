const emailsCredenciales = (req, res) => {
    res.json({
        serviceID: process.env.SERVICEID_EMAILJS,
        templateID: process.env.TEMPLATEID_EMAILS,
        credencialEmail: process.env.CREDENCIAL_EMAILJS
    });
}

module.exports = emailsCredenciales;