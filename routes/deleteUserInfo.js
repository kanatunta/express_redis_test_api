var express = require("express");
var router = express.Router();
const client = require("../client/client.js");

/* GET home page /:id */

router.delete("/:id", function(request, response, next) {
  const id = request.params.id;
  client.del(id, (err, obj) => {
    const result = JSON.stringify({ value: err ? false : true });
    response.setHeader("Content-Type", "application/json");
    return response.send(result);
  });
});

module.exports = router;
