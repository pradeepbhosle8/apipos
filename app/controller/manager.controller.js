const db = require('../model');

const Manager = db.manager;

const { Op } = require('express');


// create 
exports.createManager = (req, res) => {
    res.json({
        message: 'Working Create Manager'
    })
}

// get 
exports.findAllManager = (req, res) => {
    res.json({
        message: 'Working Find all Mamanger'
    })
}

// get singlr record
exports.findOneManager = (req, res) => {
    res.json({
        message: 'Working Single Recoard'
    })
}

// update 
exports.updateManager = (req, res) => {
    res.json({
        message: 'Working Update'
    })
}

// delete 
exports.destroyManager = (req, res) => {
    res.json({
        message: 'Working Delete Manager'
    })
}

// search