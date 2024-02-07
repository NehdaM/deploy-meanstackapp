const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://Nehda:atlas@cluster0.hs8kqom.mongodb.net/ProductsDB")

require("dotenv").config();
mongoose.connect(process.env.MONGODB_URL);

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    productID:Number,
    productName:String,
    productCode:String,
    releaseData:String,
    description:String,
    price:Number,
    starRating:Number,
    imageURL:String

});


var ProductData = mongoose.model('products',ProductSchema);

module.exports = ProductData;

