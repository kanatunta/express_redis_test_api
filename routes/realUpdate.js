var express = require("express");
var router = express.Router();
const client = require("../client/client.js");

/* GET home page /:id */

router.post("/", function(request, response, next) {
  const id = request.body.id;
  client.hgetall(id, (err, obj) => {
    if (!obj) {
      obj = { toAdd: true };
    } else {
      obj.toAdd = false;
    }
    obj.id = id;
    console.log(obj);
    return response.render("realUpdate", { title: "Real update", user: obj });
  });
});

module.exports = router;
