const { ObjectId } = require("mongodb");
const { getDb } = require("../db/connect.js");

const getAll = async (req, res, next) => {
  const result = await getDb().db().collection("contacts").find();
  result.toArray().then((data) => {
    console.log("fetched " + JSON.stringify(data));
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);
  });
};

const getOne = async (req, res, next) => {
  const query = { _id: new ObjectId(req.params.id) };
  const result = await getDb().db().collection("contacts").findOne(query);
  if (!result) res.send("Not found").status(404);
  else {
    res.status(200).json(result);
  }
};

module.exports = { getAll, getOne };
