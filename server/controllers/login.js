const bcrypt = require('bcrypt');
const { usersModel } = require("../schemas/schemas.js");

const emailAndPassword = async (email, password) => {
    const user = await usersModel.findOne({ email });

    if (!user) throw new Error("Usuario no encontrado"); // Usuario no encontrado
    
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
        throw new Error("Contraseña incorrecta"); // Contraseña incorrecta
    } 

    return user;
}


module.exports = emailAndPassword;



