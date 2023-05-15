
const express = require('express');
const router = express.Router()
const productController = require('../controller/product')


router
.post('/',productController.createProduct)
.get('/',productController.readAllProducts)
.get('/:id',productController.readSingleProduct)
.put('/:id',productController.updateAndReplace)
.patch('/:id',productController.updateData)
.delete('/:id',productController.deleteData)


exports.routers = router