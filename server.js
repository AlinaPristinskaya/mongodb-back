// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
// Import routes
const getCars = require('./routes/getCars');

// Initialize express
const app = express();
// CORS configuration
app.use(cors({
 // origin: 'https://alinapristinskaya.github.io'  // This is the URL of your React app
 
 origin: 'http://localhost:3000'
}));

// Set up port for server to listen on
const PORT = process.env.PORT || 8000;

// ! [IMPORTANT]: Replace with your mongoDB URI string. You can get it from your Atlas cluster.
const uri ="mongodb+srv://Alina:300588Alina@cluster0.hg1jotf.mongodb.net/car?retryWrites=true&w=majority&appName=Cluster0"


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
