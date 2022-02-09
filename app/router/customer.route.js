const express = require('express');

const route = express.Router();

const customerController = require('../controller/customer.controller');

// creaate 
route.post('/', customerController.createCustomer);

// retrive all customer
route.get('/', customerController.findAllCustomers);

// single customer
route.get('/:id', customerController.findOneCustomer);

// update customers
route.put('/:id', customerController.updateCustomer);

// delete Customer
route.delete('/:id', customerController.destroyCustomer);

// search by first name customer
route.post('/search/customer', customerController.searchCustomers);

module.exports = route;