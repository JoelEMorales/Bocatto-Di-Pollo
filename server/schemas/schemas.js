const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const productSchema = mongoose.Schema({
    producto: String,
    precio: Number,
    img: String,
},
    {
        versionKey: false,
        timestamps: true
    });

const productModel = mongoose.model('Product', productSchema);




const usersSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
});

usersSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password') || user.isNew) {
        try {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
            next();
        } catch (error) {
            return next(error);
        }
    } else {
        return next();
    }
});

const usersModel = mongoose.model('Users', usersSchema);

module.exports = { 
    productModel, usersModel 
};