var express = require("express");
var router = express.Router();
const client = require("../client/client.js");

/* GET home page /:id */

router.patch("/", function(request, response, next) {
  const id = request.body.id;
  const obj = client.hgetall(id, (err, obj) => {
    const first_name = request.body.first_name || obj.first_name;
    const last_name = request.body.last_name || obj.last_name;
    const email = request.body.email || obj.email;
    client.hmset(
      id,
      "first_name",
      first_name,
      "last_name",
      last_name,
      "email",
      email,
      (err, obj) => {
        const result = JSON.stringify({ value: err ? false : true });
        response.setHeader("Content-Type", "application/json");
        response.send(result);
      }
    );
  });
});

module.exports = router;
