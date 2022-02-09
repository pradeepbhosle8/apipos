const db = require('../model');

const Jobs = db.job;

const { Op } = require('sequelize');

// create Job
exports.createJob = (req, res) => {
    req.json({
        message: 'Working Create'
    })
}

// retrive recoard
exports.findAllJobs = (req, res) => {
    res.json({
        message: 'Working retrive'
    })
}

// get single record
exports.findOneJobs = (req, res) => {
    res.json({
        message: 'WOrking Single Reocard'
    })
}

// update jobs
exports.updateJobs = (req, res) => {
    res.json({
        message: 'Working Update'
    })
}

// delete recoard
exports.destroyJob = (req, res) => {
    req.json({
        message: 'Working Delete'
    })
}