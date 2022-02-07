const db = require('../model');
const Categories = db.categories;

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