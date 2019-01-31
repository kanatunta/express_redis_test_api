var express = require("express");
var router = express.Router();
const client = require("../client/client.js");

/* POST addUserInfo */
router.post("/", function(request, response, next) {
  //console.log(request.body);

  const id = request.body.id;
  const first_name = request.body.first_name;
  const last_name = request.body.last_name;
  const email = request.body.email;

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
      return response.send(result);
    }
  );
});

module.exports = router;
