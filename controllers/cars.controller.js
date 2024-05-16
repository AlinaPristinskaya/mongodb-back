
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
const Car = require("../models/car.model");

exports.addNew = async (req, res) => {
 try {
   const newCar = await Car.create(req.body);
   if (newCar) {
     res.send(newCar);
   } else {
     res.send("ups");
   }
 } catch (error) {
   console.error("An error occurred while removing cars.", error);
   res.status(500).send("An error occurred while removing cars.");
 }
};

exports.findAll = (req, res) => {
 // Use the "find" method to return all cars
 Car.find()
   .then((cars) => {
     // Send the retrieved cars as a success response
     res.send(cars);
   })
   .catch((err) => {
     // Error response
     console.log(err);
     res.status(500).send({
       message: "An error occurred while retrieving cars",
     });
   });
};

exports.findOldcars = (req, res) => {
 Car.find()
   .then((cars) => {
     const oldCards = cars.filter((car) => car.model < 2019);
     res.send(oldCards);
   })
   .catch((err) => {
     console.log(err);
     res.status(500).send({
       message: "An error occurred while retrieving cars",
     });
   });
};

exports.updateCar = async (req, res) => {
 try {
   const query = req.params.id;
   const update = req.body;
   console.log(update);
   const updatedCar = await Car.findByIdAndUpdate(query, update, {
     new: true,
   });
   if (updatedCar) {
     res.send(updatedCar);
   } else {
     res.status(404).send("Updates failed");
   }
 } catch (error) {
   console.error("Something went wrong when updating data.", error);
   res.status(500).send("An error occurred while updating.");
 }
};

exports.deleteCar = async (req, res) => {
 try {
   const removeCar = await Car.findByIdAndDelete(req.params.id);
   res.status(204).send(removeCar);
 } catch (error) {
   console.error("An error occurred while removing cars.", error);
   res.status(500).send("An error occurred while removing cars.");
 }
};
exports.updateCars = async (req, res) => {
 const updates = req.body; // Expected to be an array of objects with car IDs and their updates
 try {
   const bulkOps = updates.map((update) => {
     return {
       updateOne: {
         filter: { _id: update.id },
         update: { $set: update.data },
       },
     };
   });
   await Car.bulkWrite(bulkOps);
   res.send({ message: "Cars updated successfully" });
 } catch (error) {
   console.error("Bulk update error:", error);
   res.status(500).json({ message: "Error updating cars", error: error });
 }
};
