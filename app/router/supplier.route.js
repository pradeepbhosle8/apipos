const express = require('express');

const router = express.Router();

const supplierController = require('../controller/supplier.controller');

// create 
router.post('/', supplierController.createSupplier);

// get 
router.get('/', supplierController.findAllSupplier);

// get one
router.get('/:id', supplierController.findOneSupplier);

// update
router.put('/:id', supplierController.updateSupplier);

// delete 
router.delete('/:id', supplierController.destroySupplier);


module.exports = router;