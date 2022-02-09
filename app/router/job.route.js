const express = require('express');

const router = express.Router();

const jobController = require('../controller/job.controller');

// create 
router.post('/', jobController.createJob);

// get 
router.get('/', jobController.findAllJobs);

// get single recoard
router.get('/:id', jobController.findOneJobs);

// update 
router.put('/:id', jobController.updateJobs);

// delete
router.delete('/:id', jobController.destroyJob);


module.exports = router;