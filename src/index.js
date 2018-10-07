const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const morgan = require('morgan');
const mongoose = require('mongoose');

const port = process.env.PORT || 3333;
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost/dinosaurs';

// Init logging
winston.add(new winston.transports.Console({
  format: winston.format.simple(),
}));

// Init Mongoose
mongoose.connect(mongoUri);

// Init Express + plug routes
const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use('/api/v1', require('./routes'));

// Start the server
const listener = app.listen(port, () => {
  winston.info(`Server started on port ${listener.address().port}`);
});
