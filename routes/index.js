var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(request, response, next) {
  const result = JSON.stringify({value: new Date()});
  response.setHeader("Content-Type", "application/json");
  response.send(result);
});

module.exports = router;
