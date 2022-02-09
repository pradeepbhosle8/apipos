const express = require('express');

const router = express.Router();

const managerController = require('../controller/manager.controller');

// create 
router.post('/', managerController.createManager);

// get all reacord
router.get('/', managerController.findAllManager);

// get single reacord
router.get('/:id', managerController.findOneManager);

// update reacord
router.put('/', managerController.updateManager);

// delete recoard
router.delete('/:id', managerController.destroyManager);


module.exports = router;