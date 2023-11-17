const express = require('express');
const productController = require('../controllers/product-controller');
const router = express.Router();


router.get('/', productController.getAllProduct);
router.get('/:id', productController.getProductById);
router.post('/', productController.saveProduct);
// router.put('/:id', );
// router.delete('/:id', );



module.exports = router;