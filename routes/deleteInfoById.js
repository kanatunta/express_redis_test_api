var express = require("express");
var router = express.Router();
const client = require("../client/client");

/* GET home page. */
router.get("/", function(req, res, next) {
  client.lrange("users", 0, 10, (err, obj) => {
    console.log("lrange return obj", obj);
    res.render("deleteInfoById", { title: "Delete By Id", kanatuntas: obj });
  });
});
module.exports = router;
