var express = require("express");
var router = express.Router();
const client = require("../client/client.js");

/* GET home page /:id */

router.post("/", function(request, response, next) {
  const id = request.body.id;
  const first_name = request.body.first_name;
  const last_name = request.body.last_name;
  const email = request.body.email;
  const toAdd = request.body.toAdd;
  console.log("req.body", request.body);

  if (toAdd==='true') {
    client.lpush("users", id);
  }

  client.hmset(
    id,
    "first_name",
    first_name,
    "last_name",
    last_name,
    "email",
    email,
    (err, obj) => {
      return response.render("updateKanatuntaInfo", {
        title: "Update to redis"
      });
    }
  );
});

module.exports = router;
