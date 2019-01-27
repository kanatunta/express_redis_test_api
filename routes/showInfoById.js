var express = require('express');
var router = express.Router();
const  client = require('../client/client.js');

/* GET home page /:id */

router.post('/',function(request, response, next){ 
    const id=request.body.id;

    client.hgetall(id,(err,obj)=>{

    return response.render('showInfo', {title: "Show info",user: obj});
	});
  });


module.exports = router;
