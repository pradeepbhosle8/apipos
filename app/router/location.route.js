const express = require('express');

const router = express.Router();

const locationController = require('../controller/location.controller');

// create
router.post('/', locationController.createLocation);

// get 
router.get('/', locationController.findAllLocation);

// get single recoard
router.get('/:id', locationController.findOneLocation);

// update Record
router.put('/:id', locationController.updateLocation);

// delete record
router.delete('/:id', locationController.destroyLocation);

module.exports = router;