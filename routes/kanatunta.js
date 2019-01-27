var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const user = {"first_name":"Pepo"}; 
  res.render('kanatunta',{"user":user});
});

module.exports = router;
