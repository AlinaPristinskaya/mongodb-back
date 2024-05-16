const express = require('express');
// Use built-in Express router
const router = express.Router();
const carController = require('../controllers/cars.controller');

// Create a new car
router.post('/add', carController.create);

// Get all cars
router.get('/', carController.findAll);

// Get old cars
router.get('/old', carController.findOldcars);

// Update a owner
router.put('/update-owner', carController.updateByOwner);

// Update owners by car
router.put('/update-owners', carController.updateOwnersByCar);

// Update address by owner
router.put('/update-address', carController.updateAddressByOwner);

// Delete all cars by owner
router.delete('/delete-cars', carController.deleteCarsByOwner);


module.exports = router;