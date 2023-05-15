
const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type:String,required:true, unique:true},
    description: {type:String},
    brand: {type:String,required:true},
    price: {type:Number,required:true},
    rating:{type:Number},
    category:{type:String,required:true},
    discountPercentage:{type:Number},
    thumbnail:{type:String, required:true},
    images: [String]
  });
exports.Product = mongoose.model('Product', productSchema);

