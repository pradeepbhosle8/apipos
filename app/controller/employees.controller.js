const db = require('../model');

const Employees = db.employees;

const { Op } = require('sequelize');

// create EMp
exports.createEmployee = async(req, res) => {

    const employeeData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            job_id: req.body.job_id,
            hired_date: req.body.hired_date,
            location_id: req.body.location_id
        }
        // console.log(employeeData);

    await Employees.create(employeeData)
        .then((data) => {

            res.status(200).send({
                message: 'Employee Create Sucessfully'
            })
        })
        .catch(err => {
            // console.log(err);
            res.status(500).send({
                message: 'Some Error Found'
            })
        })

}

// retrive employee
exports.findAllEmployee = async(req, res) => {

    await Employees.findAll({})
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Some Error Found Or May be data not found'
            })
        })

}

// get single employee
exports.findOneEmployee = async(req, res) => {

    const id = req.params.id;

    await Employees.findOne({
            where: {
                employee_id: id
            }
        })
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some Error Found Or may be data not avaliable'
            })
        })

}

// update Employee\
exports.updateEmployee = async(req, res) => {

    const id = req.params.id;

    await Employees.update(req.body, {
            where: {
                employee_id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Employee Update Sucessfully'
                })
            } else {
                res.status(500).send({
                    message: 'Some Error found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Some Error Found Or May be data not found'
            })
        })

}

// delete Employee
exports.destroyEmployee = async(req, res) => {

    const id = req.params.id;

    await Employees.destroy({
            where: {
                employee_id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Employee Delete Sucessfully'
                })
            } else {
                res.status(500).send({
                    message: 'Some Error Found'
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some Error Founf Or May be data not Found'
            })
        })

}

// search by name
exports.searchEmployeeByName = async(req, res) => {

    const first_name = req.body.first_name;
    await Employees.findAll({
            where: {
                first_name: {
                    [Op.like]: `%${first_name}%`
                }
            }
        })
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some Error Found'
            })
        })
}