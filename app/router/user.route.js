const express = require('express');

const router = express.Router();

const userController = require('../controller/user.controller');
const auth = require('../middleware/auth');


// create 
router.post('/', userController.createUser);

// get user
router.get('/', auth, userController.findAllUser);

// single user get
router.get('/:id', userController.findOneUser);

// update user
router.put('/:id', userController.updateUser);

// delete user 
router.delete('/:id', userController.destroyUser);

// SignIn Up Or Login 
router.post('/v2/login', userController.signIn);



module.exports = router;