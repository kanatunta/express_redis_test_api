var express = require('express');
var router = express.Router();
const client = require('../client/client');

/* GET home page. */
router.get('/', function(req, res, next) {    
client.scan(10,(err,obj)=>{
console.log(obj[1]);
res.render('searchById',{title: "Search By Id", kanatuntas: obj[1]});

});

});

module.exports = router;
