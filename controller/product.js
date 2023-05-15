

const  model =  require('../model/product')
const Product = model.Product
const mongoose = require('mongoose')
exports.createProduct = (req,res)=>{
    const product = new Product(req.body);
    product.save()
    res.status(201).json(product)
}

exports.readAllProducts =async (req,res)=>{
    const allProduct = await Product.find()
    res.json(allProduct)
}
exports.readSingleProduct = async (req,res)=>{
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product)
}
exports.updateAndReplace = async (req,res)=>{
    const id = req.params.id;
    const newProduct = await Product.findOneAndReplace({_id:id},req.body,{new:true})
    res.json(newProduct)
}
exports.updateData =async (req,res)=>{
    const id = req.params.id;
    const newProduct = await Product.findOneAndUpdate({_id:id},req.body)
    res.json(newProduct)
}
exports.deleteData = async(req,res) => {
    const id = req.params.id;
    try {
        const deleteData = await Product.findOneAndDelete({_id:id},{new:true});
        res.json(deleteData)
    } catch (error) {
        res.status(404).json(err)
    }
}