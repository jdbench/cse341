const { nameFunction } = require('../controllers');
const contacts = require("./contacts.js");

const routes = require('express').Router();

routes.get('/', nameFunction);
routes.use("/contacts", contacts);

module.exports = routes;