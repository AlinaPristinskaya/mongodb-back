// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
// Import routes
const getCars = require('./routes/getCars');
require('dotenv').config();

// Initialize express
const app = express();
// CORS configuration
app.use(cors({
  origin: ['https://alinapristinskaya.github.io', 'http://localhost:3000'],
  credentials: true
}));

// Set up port for server to listen on
const PORT = process.env.PORT || 10000;



const uri = process.env.MONGO_URI ||'mongodb+srv://alina:300588@cluster0.tyvdyv8.mongodb.net/cat?retryWrites=true&w=majority&appName=Cluster0'

// Connect to the database
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => { console.log('Successfully connected to the database!') },
  err => { console.log('Could not connect to the database...' + err) }
);



// Allow app to accept json and url encoded values
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes to be handled from: http://localhost:8080/blogs
app.use('/cars', getCars);

// Start up express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
