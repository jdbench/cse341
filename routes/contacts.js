const {
  createContact,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} = require("../controllers/contacts.js");
const routes = require("express").Router();

routes.get("/", getAll);
routes.get("/:id", getOne);
routes.post("/", createContact);
routes.put("/:id", updateOne);
routes.delete("/:id", deleteOne);

module.exports = routes;
