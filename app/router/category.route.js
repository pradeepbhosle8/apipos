const express = require('express');

const route = express.Router();

const categoryController = require('../controller/category.controller');

// post cate
route.post('/', categoryController.createCategories);





module.exports = route;