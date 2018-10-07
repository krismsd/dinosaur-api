const Router = require('express').Router();

Router.use('/dinosaur', require('./dinosaur'));

module.exports = Router;
