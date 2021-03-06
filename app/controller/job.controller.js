const db = require('../model');

const Jobs = db.job;

const { Op } = require('sequelize');

// create Job
exports.createJob = async(req, res) => {

    const jobData = {
            job_title: req.body.job_title,
            salary: req.body.salary,
            login_time: req.body.login_time,
            logout_time: req.body.logout_time,

        }
        // console.log(jobData);
    await Jobs.create(jobData)
        .then((data) => {
            res.status(200).send({
                message: 'Job Create Sucessfully'
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'Some Error Found'
            })
        })
}

// retrive recoard
exports.findAllJobs = async(req, res) => {

    await Jobs.findAll({})
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Some Error Found'
            })
        })

}

// get single record
exports.findOneJobs = async(req, res) => {

    const id = req.params.id;

    await Jobs.findOne({
            where: {
                job_id: id
            }
        })
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Some Error Found'
            })
        })

}

// update jobs
exports.updateJobs = async(req, res) => {

    const id = req.params.id;

    await Jobs.update(req, body, {
            where: {
                job_id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Update Sucessfully'
                })
            } else {
                res.status(500).send({
                    message: 'Some Error Found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error Found'
            })
        })

}

// delete recoard
exports.destroyJob = async(req, res) => {

    const id = req.params.id;

    await Jobs.destroy({
            where: {
                job_id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Delete Sucessfully'
                })
            } else {
                res.status(500).send({
                    message: 'Some Error Found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error Found'
            })
        })

}