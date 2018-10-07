const basicAuth = require('express-basic-auth');
const winston = require('winston');

const adminPassword = process.env.ADMIN_PASSWORD;

let authMiddleware;
if (typeof adminPassword !== 'undefined') {
  winston.info('Admin password found, admin auth middleware will be active');
  authMiddleware = basicAuth({
    users: {
      admin: adminPassword,
    },
  });
} else {
  winston.info('Admin password not found, admin auth middleware will let all requests through');
  authMiddleware = (res, req, next) => next();
}

module.exports = authMiddleware;
