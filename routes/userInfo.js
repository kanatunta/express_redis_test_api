var express = require("express");
var router = express.Router();
const client = require("../client/client.js");

/* GET home page /:id */

router.get("/:id", function(request, response, next) {
  const id = request.params.id;
  client.hgetall(id, (err, obj) => {
    const objWithId = Object.assign({ id: id }, obj);
    response.setHeader("Content-Type", "application/json");
    const result = JSON.stringify({ value: objWithId });
    return response.send(result);
  });
});

module.exports = router;
