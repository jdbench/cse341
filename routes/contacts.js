const { getAll, getOne } = require("../controllers/contacts.js");
const routes = require("express").Router();

routes.get("/", getAll);
routes.get("/:id", getOne);

module.exports = routes;
