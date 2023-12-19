const mongoose = require("mongoose");

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

module.exports = productModel;