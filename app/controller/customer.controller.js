const db = require('../model');

const Customers = db.customers;
const {Op} = require('sequelize');

// create customers 
exports.createCustomer = (req, res) => {
    res.json({
        message:'Working Create Customers'
    })
}

// retrive all Customers
exports.findAllCustomers = (req, res) =>{
    res.json({
        message:'Working On Retrive customers'
    })
}

// get single record customers
exports.findOneCustomer = (req, res) =>{
    res.json({
        message: 'single record Customer Working'
    })
}

// update customers
exports.updateCustomer = (req, res) =>{
    res.json({
        message: 'Working On update Customers'
    })
}

// delete Customers
exports.destroyCustomer = (req, res) =>{
    res.json({
        message: 'Working On Delete Customers'
    })
}

// search customer Name
exports.searchCustomers = (req, res) =>{
    res.json({
        message: 'Working On first name Customer search'
    })
}