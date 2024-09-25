
const express = require('express');
const productController = require('../controllers/productController');
const validateProduct = require('../middlewares/validateProduct');

const router = express.Router();

router.get('/', productController.getAllProducts.bind(productController));
router.get('/:id', productController.getProductById.bind(productController));
router.post('/displayproducts', validateProduct, productController.createProduct.bind(productController));
router.put('/:id', validateProduct, productController.updateProduct.bind(productController));
router.patch('/:id', productController.updateProductInStock.bind(productController));
router.delete('/:id', productController.deleteProduct.bind(productController));



module.exports = router;
