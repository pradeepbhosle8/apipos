const db = require('../model');

const Users = db.users;

const { Op } = require('express');

// create 
exports.createUser = async(req, res) => {

    const userData = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name,
            image: req.body.image,
            role_id: req.body.role_id,

        }
        // console.log(userData);
    await Users.create(userData)
        .then((data) => {
            res.status(200).send({
                message: 'User Add Successfully'
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'Some Error Found'
            })
        })
}

// get all
exports.findAllUser = async(req, res) => {

    await Users.findAll({})
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: ' SOme Error Found'
            })
        })
}

// get single recoard
exports.findOneUser = async(req, res) => {

    const id = req.params.id;
    await Users.findOne({
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

// update 
exports.updateUser = async(req, res) => {

    const id = req.params.id;

    await Users.update(req.body, {
            where: {
                id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'User Update Sucessfully'
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

// delete 
exports.destroyUser = async(req, res) => {

    const id = req.params.id;

    await Users.destroy({
            where: {
                id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'User delete Sucessfully'
                })
            } else {
                res.status(500).send({
                    message: 'Some Error Found'
                })
            }
        })

    .catch(err => {
        res.status(500).send({
            message: 'Some Error Found'
        })
    })

}

// search USer Working LAter