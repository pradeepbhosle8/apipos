const db = require('../model');

const Manager = db.manager;

const { Op } = require('express');
const res = require('express/lib/response');


// create 
exports.createManager = async(req, res) => {

    const managerData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            location_id: req.body.location_id,
            email: req.body.email,
            phone_nnmer: req.body.phone_nnmer,

        }
        // console.log(managerData)

    await Manager.create(managerData)
        .then((data) => {
            res.status(200).send({
                message: 'Create Manager Sucessfully'
            })
        })
        .catch(er => {
            res.status(500).send({
                message: 'Error Found'
            })
        })

}

// get 
exports.findAllManager = async(req, res) => {

    await Manager.findAll({})
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(200).send({
                message: 'Error Found'
            })
        })
}

// get singlr record
exports.findOneManager = async(req, res) => {

    const id = req.params.id;

    await Manager.findOne({
            where: {
                manager_id: id
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

// update 
exports.updateManager = async(req, res) => {

    const id = req.params.id;

    await Manager.update(req.body, {
            where: {
                manager_id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Update Manager Sucessfully'
                })
            } else {
                res.status(500).send({
                    message: 'Some Error Found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error Dound'
            })
        })
}

// delete 
exports.destroyManager = async(req, res) => {
    const id = req.params.id;

    await Manager.destroy({
            where: {
                manager_id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Delete Manager Sucessfully'
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

// search