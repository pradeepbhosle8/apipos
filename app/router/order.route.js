const express = require('express');

const router = express.Router();

const orderController = require('../controller/order.controller');

// create 
router.post('/', orderController.createOrder);

// get 
router.get('/', orderController.findAllOrder);

// get single 
router.get('/:id', orderController.findOneOrder);

// update order
router.put('/:id', orderController.updateOrder);

// delete
router.delete('/:id', orderController.destroyOrder);


module.exports = router;