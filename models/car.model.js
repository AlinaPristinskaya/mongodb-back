
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