const db = require('../model');

const Products = db.product;

const { Op } = require('express');

// create
exports.createProducts = (req, res) => {
    res.json({
        message: 'WOrking Create Product'
    })
}

// get recaord
exports.findAllProducts = (req, res) => {
    res.json({
        message: 'Working On Gert Recoard Products'
    })
}

//get single recoard
exports.findOneProducts = (req, res) => [
    res.json({
        message: 'WOrking SIngle Recaord'
    })
]

// update 
exports.updatetProducts = (req, res) => {
    res.json({
        message: 'Working On Updfate Record'
    })
}

// delete Recoard
exports.deleteProducts = (req, res) => {
    res.json({
        message: 'Delete Product Working'
    })
}

// search list later Work