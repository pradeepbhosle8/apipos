const express = require('express');

const router = express.Router();

const userController = require('../controller/user.controller');

// create 
router.post('/', userController.createUser);

// get user
router.get('/', userController.findAllUser);

// single user get
router.get('/:id', userController.findOneUser);

// update user
router.put('/:id', userController.updateUser);

// delete user 
router.delete('/:id', userController.destroyUser);



module.exports = router;