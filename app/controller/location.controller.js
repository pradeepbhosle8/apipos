const db = require('../model');

const Location = db.location;

const { Op } = require('express');

// create 
exports.createLocation = (req, res) => {
    res.json({
        message: 'Working Create'
    })
}

// retrive all data
exports.findAllLocation = (req, res) => {
    res.json({
        message: 'Working Retrive'
    })
}

// single data 
exports.findOneLocation = (req, res) => {
    res.json({
        message: 'Working Single data'
    })
}

// update data
exports.updateLocation = (req, res) => {
    res.json({
        message: 'Working On Update'
    })
}

// delete
exports.destroyLocation = (req, res) => {
    res.json({
        message: 'Working Delete'
    })
}

// search later On Work