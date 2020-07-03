const express = require("express");
const router = express.Router();
const User = require("../models/users");
const {
  Op
} = require("sequelize");



router.post("/register", (req, res, next) => {
  User.create(req.body).then(user => res.status(200).send(user))
    .catch(next);
});

router.get("/logout", (req, res) => {
  console.log(req.logout)
  req.logout();
  res.send("loguedout");
});

router.post("/login", (req, res, next) => {
  User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      throw new Error(err);
    })
});



module.exports = router;