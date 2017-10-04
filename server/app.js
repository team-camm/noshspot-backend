const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require('./models/Customer.js');
const userModel = require('./models/Restaurant.js');
const app = express();
mongoose.connect('mongodb://localhost/noshspot', { useMongoClient: true });
mongoose.Promise = Promise;
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello');
})
app.use('/api/users', require('./routes/customer'));
app.use('/api/blogs', require('./routes/restaurant'));
module.exports = app;