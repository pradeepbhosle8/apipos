const db = require('../model');

const Order = db.order;

const { Op } = require('express');

// create 
exports.createOrder = (req, res) => {
    res.json({
        message: 'Working Create Order'
    })
}

// get 
exports.findAllOrder = (req, res) => {
    res.json({
        message: 'Working All Orders'
    })
}

// get single 
exports.findOneOrder = (req, res) => {
    res.json({
        message: 'Working Single Order'
    })
}

// update Order\
exports.updateOrder = (req, res) => {
    res.json({
        message: 'Working Update Order'
    })
}

// delete 
exports.destroyOrder = (req, res) => {
    res.json({
        message: 'Working Destroy Order'
    })
}

// search Working later