const mongoose = require("mongoose");

// Initialize our schema
const carSchema = mongoose.Schema({
 model: {
   // Sets the data type of the title field to be a string
   type: Number,
   // Sets the title field to be required
   required: true,
 },
 make: {
   type: String,
   required: true,
 },
 color: {
   type: String,
   required: true,
   default: "red"
 },
 registration_number: {
   type: String,
   required: true,
 },

 owner: {
   type: String,
   required: true,
 },
 //to store all previous owners for a specific car
 // we add an optional property to the model "owners"
 address: {
   type: String,
   required: true,
 },
});

module.exports = mongoose.model('Car', carSchema);