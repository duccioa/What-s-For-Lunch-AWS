var express = require('express');
var router = express.Router();
var DBLink_DataSource_6624628 = require('../databases/DBLink_DataSource_6624628.js');


var crypto = require('crypto')

/* UTILITY FUNCTIONS */
function strip_tags(input, allowed) {
    allowed = (((allowed || '') + '')
            .toLowerCase()
            .match(/<[a-z][a-z0-9]*>/g) || [])
        .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '')
        .replace(tags, function($0, $1) {
            return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
        });
}

function json_encode(mixed_val) {
    return JSON.stringify(mixed_val);
}
/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(appRoot + '/public/index.html');
});
/* SERVICE ENDPOINTS */

	/**
	 * Select premises by the token
	 * 
	 * @author Duccio
	 * @version 1.0 2016-12-15 10:28:15
	 */				
	
router.get("/token_premises",function(req,res)
{ 
	var token = req.query.token;
	DBLink_DataSource_6624628.model.query("SELECT `businessname` AS `businessname`, `token` AS `token`, `lat` AS `lat`, `lon` AS `lon`" + 
 		" FROM `token_premises` ",function(err,rows){ 
	var result = {}; 
	if(err !== null) 
	{ 
		result.error = err; 
	} 
	else  
	{ 
		result.results = rows; 
	} 
	res.setHeader('content-type','text/json'); 
	res.send(json_encode(result)); 
	});
		
});
	/**
	 * Select premises by the token
	 * 
	 * @author Duccio
	 * @version 1.0 2016-12-15 10:28:15
	 */				
	
router.get("/token_premises/:token",function(req,res)
{ 
	var token = req.query.token;
	DBLink_DataSource_6624628.model.query("SELECT `businessname` AS `businessname`, `token` AS `token`, `lat` AS `lat`, `lon` AS `lon`" + 
 		" FROM `token_premises` WHERE `token` = '" + token + "'",function(err,rows){ 
	var result = {}; 
	if(err !== null) 
	{ 
		result.error = err; 
	} 
	else  
	{ 
		result.results = rows; 
	} 
	res.setHeader('content-type','text/json'); 
	res.send(json_encode(result)); 
	});
		
});




module.exports = router;
