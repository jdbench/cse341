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

const createContact = async (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const favoriteColor = req.body.favoriteColor;
  const birthday = req.body.birthday;
  if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
    res.status(400).send("Required parameter was not defined");
  } else {
    try {
      const result = await getDb().db().collection("contacts").insertOne({
        firstName,
        lastName,
        email,
        favoriteColor,
        birthday,
      });
      res.status(201).json(result);
    } catch (e) {
      res.status(500).json(response.error ?? "There was an error.");
    }
  }
};

const updateOne = async (req, res, next) => {
  const _id = new ObjectId(req.params.id);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const favoriteColor = req.body.favoriteColor;
  const birthday = req.body.birthday;
  if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
    res.status(400).send("Required parameter was not defined");
  } else {
    const contact = {
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    };
    try {
      const result = await getDb()
        .db()
        .collection("contacts")
        .replaceOne({ _id }, contact);
      res.status(204).json(result);
    } catch (e) {
      console.error(e);
      res.status(500).json(e ?? "There was an error updating the contact.");
    }
  }
};
const deleteOne = async (req, res, next) => {
  const _id = new ObjectId(req.params.id);
  try {
    const result = await getDb().db().collection("contacts").deleteOne({ _id });
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json(e ?? "There was an error updating the contact.");
  }
};

module.exports = { createContact, deleteOne, getAll, getOne, updateOne };
