const db = require('../model');

const Products = db.product;

const { Op } = require('express');

// create
exports.createProducts = async(req, res) => {

    const productsData = {
            name: req.body.name,
            price: req.body.price,
            category_id: req.body.category_id,
            description: req.body.description,
            image: req.body.image
        }
        // console.log(prductsData)

    await Products.create(productsData)
        .then((data) => {
            res.status(200).send({
                message: 'Product Add Sucessfully'
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error Found'
            })
        })


}

// get recaord
exports.findAllProducts = async(req, res) => {

    await Products.findAll({})
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error Found'
            })
        })

}

//get single recoard
exports.findOneProducts = async(req, res) => {

    const id = req.params.id;

    await Products.findOne({
            where: {
                id: id
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
exports.updatetProducts = async(req, res) => {

    const id = req.params.id;

    await Products.update(req.body, {
            where: {
                id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Update Products Sucecssfully'
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

// delete Recoard
exports.deleteProducts = async(req, res) => {

    const id = req.params.id;

    await Products.destroy({
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

// search list later Work