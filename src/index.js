const dotenv = require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { schema } = require('./models/Players');

const app = express();
const link = mongoose.connect(process.env.DATABASE_URI)
link.then(db => console.log('DB is connected')).catch(err => console.error());

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/players', require('./routes/players'));

// Satic files
app.use(express.static(__dirname + '/public'));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});