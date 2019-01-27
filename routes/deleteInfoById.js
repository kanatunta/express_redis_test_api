var express = require('express');
var router = express.Router();
const client = require('../client/client');

/* GET home page. */
router.get('/', function(req, res, next) { 
client.scan(10,(err,obj)=>{   
res.render('deleteInfoById',{title: "Delete By Id",kanatuntas: obj[1]});
});
});
module.exports = router;
