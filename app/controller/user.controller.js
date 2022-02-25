const db = require('../model');

const Users = db.users;

const { Op } = require('express');
const authConfig = require('../config/auth.config');

const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


// create Register User
exports.createUser = async(req, res) => {

    const userData = {
            username: req.body.username,
            // password: req.body.password,
            password: bcrypt.hashSync(req.body.password, 8),
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

// Login User 
exports.signIn = async(req, res) => {

    Users.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((user) => {
            // console.log(err);
            // console.log(!user);
            // if (err) {

            //     res.status(500).send({
            //         message: err
            //     })
            // }
            if (!user) {
                return res.status(404).send({
                    message: 'User Not Found'
                })
            }
            // comparing Password
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            )

            //checking if password was valid and send response accordingly 
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: 'Invalid Password'
                })
            }
            // siging token with user id
            var token = jwt.sign({
                    id: user.id
                }, authConfig.secret, {
                    expiresIn: 86400 // 24 hours
                })
                // responding to client request with user profile sucess message and access token.
            res.status(200).send({
                user: {
                    id: user.id,
                    email: user.email,
                    user: user.name,
                    role: user.role_id
                },
                message: 'Login SucessFully',
                accessToken: token
            })

        })
}


// join