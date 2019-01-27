var express = require("express");
var router = express.Router();
const client = require("../client/client.js");

/* GET home page /:id */

router.post("/", function(request, response, next) {
  const id = request.body.id;
  client.lrem("users",1,id);//remove user id from list @users
  client.del(id, (err, obj) => {
    return response.render("deleteInfo", { title: "Delete info" });
  });
});

module.exports = router;
