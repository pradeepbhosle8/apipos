const db = require('../model');

const Customers = db.customers;
const { Op } = require('sequelize');

// create customers 
exports.createCustomer = async(req, res) => {

    const customerData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,

        }
        // console.log(customerData);

    await Customers.create(customerData)
        .then((data) => {
            res.status(200).send({
                message: 'Create Customer Successfully'
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'SOme Error Found or may be data not avaliable'
            })
        })
}

// retrive all Customers
exports.findAllCustomers = async(req, res) => {

    await Customers.findAll({})
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some Error Found Or may be Data Not avaliable'
            })
        })

}

// get single record customers
exports.findOneCustomer = async(req, res) => {

    const id = req.params.id;
    // console.log(id)

    await Customers.findOne({
            where: {
                customer_id: id
            }
        })
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || ' Some Error found or may be data not avaliable '
            })
        })
}

// update customers
exports.updateCustomer = async(req, res) => {

    const id = req.params.id;

    await Customers.update(req.body, {
            where: {
                customer_id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Customer Update Sucessfully'
                })
            } else {
                res.status(500).send({
                    message: 'Somne Error Found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || ' Some Error Found Or May Be data Not Found'
            })
        })


}

// delete Customers
exports.destroyCustomer = async(req, res) => {

    const id = req.params.id;

    await Customers.destroy({
            where: {
                customer_id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Delete Customers Sucessfully'
                })
            } else {
                res.status(500).send({
                    message: 'Some Error Found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some Error Found Or may be data not avaliabel'
            })
        })

}

// search customer Name
exports.searchCustomers = async(req, res) => {

    const firstname = req.body.first_name;
    console.log(firstname);
    const lastname = req.body.last_name;
    const phonenumber = req.body.phone_number;

    await Customers.findAll({
            where: {
                first_name: {
                    [Op.like]: `%${firstname}%`
                }
            }
        })
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some Error Found Or May Be Data Not Avaliable'
            })
        })
}