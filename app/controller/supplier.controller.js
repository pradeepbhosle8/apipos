const db = require('../model');

const Supplier = db.supplier;

const { Op } = require('express');


// create
exports.createSupplier = (req, res) => {
    res.json({
        message: 'Working Create Supplier'
    })
}

// get 
exports.findAllSupplier = (req, res) => {
    res.json({
        message: 'Working Get'
    })
}

// get single 
exports.findOneSupplier = (req, res) => {
    res.json({
        message: 'Working Single '
    })
}

// update
exports.updateSupplier = (req, res) => {
    res.json({
        message: 'Working Update'
    })
}

// delete 
exports.destroySupplier = (req, res) => {
    res.json({
        message: 'Working Delete'
    })
}

// search