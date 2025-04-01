const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const getCars = require('./routes/getCars');

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // Убедитесь, что указали правильный URL вашего фронта
}));

const PORT = process.env.PORT || 8000;
const uri = process.env.MONGO_URI || "mongodb+srv://Alina:300588Alina@cluster0.hg1jotf.mongodb.net/car?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to the database!'))
  .catch(err => {
    console.error('Could not connect to the database:', err);
    process.exit(1); // Завершаем процесс, если не удается подключиться к базе данных
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/cars', getCars);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
