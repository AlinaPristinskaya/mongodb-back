
const express = require('express');
// Use built-in Express router
const router = express.Router();
const carController = require('../controllers/cars.controller');

// Create a new car
//router.post('/add', carController.create);
router.post('/add', carController.addNew);

// Get all cars
router.get('/', carController.findAll);

// Get old cars
router.get('/old', carController.findOldcars);

// Update many
router.put('/bulk-update', carController.updateCars);

// Update by id
router.put('/:id', carController.updateCar);

// Delete all cars by id
router.delete('/:id', carController.deleteCar);


module.exports = router;