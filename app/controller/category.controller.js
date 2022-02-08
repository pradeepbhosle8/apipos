const db = require('../model');
const Categories = db.categories;
const { Op } = require('sequelize');
const { sequelize } = require('../model');

// create categories 
exports.createCategories = async(req, res) => {

    const cateDAta = {
        name: req.body.name,
        description: req.body.description
    }

    await Categories.create(cateDAta)
        .then((data) => {
            res.status(200).send({
                message: 'Category Create Sucessfully'
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some Error Find Category create or may be data not found'
            })
        })
}

// retrive all category Data
exports.findAllCategory = async(req, res) => {

    await Categories.findAll({})
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some Error Found. May Be not Found'
            })
        })

}

// get one recoard category DATA
exports.findOneCategory = async(req, res) => {

    const id = req.params.id;
    console.log(id);

    await Categories.findOne({
            where: {
                category_id: id
            }
        })
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some Error Found Or May be not Found'
            })
        })

}

// update category 
exports.updateCategory = async(req, res) => {

    const id = req.params.id;

    await Categories.update(req.body, {
            where: {
                category_id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Update Category Sucessfully'
                })
            } else {
                res.status(500).send({
                    message: 'Some Error Found in Update Category. Or may be Data Not Found '
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some Error Found Or may be data not Found'
            })
        })

}

// delete category
exports.distroyCategory = async(req, res) => {

    const id = req.params.id;

    await Categories.destroy({
            where: {
                category_id: id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).send({
                    message: 'Delete Category Sucessfully '
                })
            } else {
                res.status(500).send({
                    message: 'Some Error Found Delete Category. May be category Not Found'
                })
            }
        })
}

// search category
exports.searchCategoryName = async(req, res) => {

    // res.json({
    //     message: 'Working'
    // })

    const name = req.body.name;
    console.log(name);

    await Categories.findAll({
        where: {
            name: {
                [Op.like]: `%${name}%`
            }
        }
    })

    .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            req.status(500).send({
                message: err.message || 'Some Errro Found or May be category Not Found'
            })
        })




}