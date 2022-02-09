const express = require('express');

const router = express.Router();

const employeeController = require('../controller/employees.controller');

// create 
router.post('/', employeeController.createEmployee);

// get all 
router.get('/', employeeController.findAllEmployee);

// single recoard
router.get('/:id', employeeController.findOneEmployee);

// update 
router.put('/:id', employeeController.updateEmployee);

// delete 
router.delete('/:id', employeeController.destroyEmployee);

// search bby name
router.get('/search/employee', employeeController.searchEmployeeByName);


module.exports = router;