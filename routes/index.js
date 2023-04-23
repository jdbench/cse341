const { nameFunction } = require('../controllers');

const routes = require('express').Router();

routes.get('/', nameFunction);

module.exports = routes;