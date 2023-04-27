const { getDb } = require("../db/connect");

const getData = async (req, res, next) => {
  const result = await getDb().db().collection("professional").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

module.exports = { getData };
