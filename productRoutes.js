const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
//create
router.post('/products', productController.createProduct);
//read
router.get('/products', productController.getAllProducts);
//update
router.put('/products/:id', productController.updateProduct);
//delete
router.delete('/products/:id', productController.deleteProduct);
module.exports = router;