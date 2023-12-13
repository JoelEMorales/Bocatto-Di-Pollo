const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
   producto: String,
   precio: Number,      
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;