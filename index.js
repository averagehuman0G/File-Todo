const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGOURI);

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.listen(port);
