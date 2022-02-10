const db = require('../model');

const Role = db.role;

const { Op } = require('express');

// create role
exports.createRole = async(req, res) => {

    const roleData = {
        name: req.body.name
    }

    await Role.create(roleData)
        .then((data) => {
            res.status(200).send({
                message: 'Role add succesfully'
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error Found'
            })
        })

}

// retrive all 
exports.findAllRole = async(req, res) => {

    await Role.findAll({})
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Some Error Found'
            })
        })

}

// get single recoard
exports.findOneRole = async(req, res) => {

    const id = req.params.id;

    await Role.findOne({
            where: {
                id: id
            }
        })
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'SOme Error Found'
            })
        })

}

// update Role
exports.updateRole = async(req, res) => {

    const id = req.params.id;
    await Role.update(req.body, {
            where: {
                id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Role Update Successfully'
                })
            } else {
                res.status(500).send({
                    message: 'Error Found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Some Error Found'
            })
        })

}

// delete Role
exports.destroyRole = async(req, res) => {
    const id = req.params.id;

    await Role.destroy({
            where: {
                id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Delete Sucessfully'
                })
            } else {
                res.status(500).send({
                    message: 'Error Found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Some Error Found'
            })
        })

}

// search later