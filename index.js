require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
mongoose.connect(process.env.MONGOURI);

setupController(app);
apiController(app);

app.listen(port);
