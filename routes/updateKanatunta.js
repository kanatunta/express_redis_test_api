var express = require("express");
var router = express.Router();
const client = require("../client/client");

/* GET home page. */
router.get("/", function(req, res, next) {
  client.lrange("users", 0, 10, (err, obj) => {
    res.render("updateInfoById", {
      title: "Update info By Id",
      kanatuntas: obj
    });
  });
});

module.exports = router;
