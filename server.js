 const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = 'mongodb+srv://jo3:1q2w3e4r5t6y7u8i9o0p@youtubetutorial.trq4f.mongodb.net/?retryWrites=true&w=majority';
const routes = require('./routes/api');

mongoose.connect(MONGODB_URI || 'mongodb://localhost/MERN_DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// above lines parse objects and urls that come through to server
// makes them available in the req.body

//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);
app.listen(PORT, console.log(`Server running on port ${PORT}`));