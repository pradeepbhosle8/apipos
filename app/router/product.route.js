const express = require('express');

const router = express.Router();

const productController = require('../controller/product.controller');

// create 
router.post('/', productController.createProducts);

// get 
router.get('/', productController.findAllProducts);

// get single
router.get('/:id', productController.findOneProducts);

// update

router.put('/:id', productController.updatetProducts);

// delete
router.delete('/:id', productController.deleteProducts);

module.exports = router;