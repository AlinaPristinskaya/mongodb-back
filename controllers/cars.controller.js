const Car = require('../models/car.model');

exports.create = async (req, res) => {
    try {
        // Create a new car
        const carModel = new Car({
        model: 2022,
        make: "Ford Fiesta",
        registration_number: "AB999HR",
        owner: "Sue Bailey",
        address: "13 Main Road, Johannesburg, South Africa"
        });

        // Save the new car
        const savedCar= await carModel.save();

        // Success response
        console.log(savedCar);
        res.send('The car has been added');
    } catch (error) {
        // Error response
        console.error(error);
        res.status(500).send({
            message: "Some error occurred while creating the car."
        });
    }
};

exports.findAll = (req, res) => {
    // Use the "find" method to return all cars
    Car.find()
        .then(cars => {
            // Send the retrieved cars as a success response
            res.send(cars);
        })
        .catch(err => {
            // Error response
            console.log(err);
            res.status(500).send({
                message: "An error occurred while retrieving cars"
            });
        });
};

exports.findOldcars = (req, res) => {
    Car.find()
    .then(cars => {
        // using the filter method we find all cars whose model is less than 2019
        const oldCards = cars.filter(car => car.model<2019);
        res.send(oldCards);
    })
    .catch(err => {
        // Error response
        console.log(err);
        res.status(500).send({
            message: "An error occurred while retrieving cars"
        });
    });
};


exports.updateByOwner = async (req, res) => {
    try {
        // Define the query to find cars with the specified owner
        const query = { owner: 'Sue Bailey' };

        // Define the new data to update the owner
        const update = { owner: 'Sue Smith'};

        /* Use the "findOneAndUpdate" method to update a car with the
        specified owner and set the "new" option to true to get the
        updated document as the result */
        const updatedCar = await Car.findOneAndUpdate(query, update, { new: true });
        if (updatedCar) {
            res.send("Updated successfully");
        } else {
            res.status(404).send("Updates failed");
        }
    } catch (error) {
        console.error("Something went wrong when updating data.", error);
        res.status(500).send("An error occurred while updating.");
    }
};
//same update with different values query and update
exports.updateOwnersByCar = async (req, res) => {
    try {
        
        const query = { make: "Ford Fiesta" };
        const update = { owners: ["Hanna Smith", "Mark Perfitt", "Samanta Balan"]};
        const updatedCar = await Car.findOneAndUpdate(query, update, { new: true });
        if (updatedCar) {
            res.send("Updated successfully");
        } else {
            res.status(404).send("Updates failed");
        }
    } catch (error) {
        console.error("Something went wrong when updating data.", error);
        res.status(500).send("An error occurred while updating.");
    }
};

//same update with different values query and update
exports.updateAddressByOwner = async (req, res) => {
    try {
        const query = { owner: 'Sue Bailey' };
        const update = { address: '21 Maureen Street, Bluewater Bay, Port Elizabeth, South Africa'};
        const updatedCar = await Car.findOneAndUpdate(query, update, { new: true });

        if (updatedCar) {
            res.send("Updated successfully");
        } else {
            res.status(404).send("Updates failed");
        }
    } catch (error) {
        console.error("Something went wrong when updating data.", error);
        res.status(500).send("An error occurred while updating.");
    }
};


exports.deleteCarsByOwner = async (req, res) => {
    try {
        // Remove all cars with the specified owner
        const deleteResult = await Car.deleteMany({ owner: 'Sue Bailey' });

        if (deleteResult.deletedCount > 0) {
            res.send("Successfully deleted all cars from owner.");
        } else {
            res.send("Owner not found...");
        }
    } catch (error) {
        console.error("An error occurred while removing cars.", error);
        res.status(500).send("An error occurred while removing cars.");
    }
};