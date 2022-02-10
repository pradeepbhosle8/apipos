const express = require('express');

const router = express.Router();

const roleController = require('../controller/role.controller');

// create 
router.post('/', roleController.createRole);

// get 
router.get('/', roleController.findAllRole);

// get one
router.get('/:id', roleController.findOneRole);

// update
router.put('/:id', roleController.updateRole);

// delete 
router.delete('/:id', roleController.destroyRole);


module.exports = router;