const { nameFunction } = require("../controllers");
const { getData } = require("../controllers/professional");
const contacts = require("./contacts.js");
const swagger = require("./swagger.js");

const routes = require("express").Router();

routes.get("/", nameFunction);
routes.get("/professional", getData);
routes.use("/contacts", contacts);
routes.use("/api-docs", swagger);

module.exports = routes;
