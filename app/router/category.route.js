const express = require('express');

const route = express.Router();

const categoryController = require('../controller/category.controller');

// post cate
route.post('/', categoryController.createCategories);

// get retrive all category
route.get('/', categoryController.findAllCategory);

// get single record category 
route.get('/:id', categoryController.findOneCategory);

// update Category base using id
route.put('/:id', categoryController.updateCategory);

// delete category base using id
route.delete('/:id', categoryController.distroyCategory);

// search by Name category
route.get('/search/categoryname/', categoryController.searchCategoryName);





module.exports = route;