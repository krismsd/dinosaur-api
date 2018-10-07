const Router = require('express').Router();

Router.get('/', require('./get-all'));
Router.get('/:name', require('./get-one'));
Router.post('/', require('./create'));
Router.put('/:name', require('./update'));
Router.delete('/:name', require('./delete'));

module.exports = Router;
