const Router = require('express').Router();

const adminAuth = require('../../middleware/admin-auth');

Router.get('/', require('./get-all'));
Router.get('/:name', require('./get-one'));
Router.post('/', adminAuth, require('./create'));
Router.put('/:name', adminAuth, require('./update'));
Router.delete('/:name', adminAuth, require('./delete'));

module.exports = Router;
