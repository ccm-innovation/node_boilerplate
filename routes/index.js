var models = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("index", {
    title: "CCM Node Boilerplate",
    users: [],
    example: "test"
  });
});

module.exports = router;
