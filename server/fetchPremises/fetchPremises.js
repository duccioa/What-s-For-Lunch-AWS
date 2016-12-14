// AWS FoodPremises API
// fetchPremises function

var moment = require('moment');

var portNumber = 3306;

var mysql = require('mysql');

// MySQL Connection Variables


connection.connect();

//This handler will invok after receiving the event with lat_min, lon_min, lat_max, lon_max, token
exports.handler = function(event, context) {
   console.log('Received event:', JSON.stringify(event, null, 2));
   var lat_min = parseFloat(event.lat_min);
  var lon_min = parseFloat(event.lon_min);
  var lat_max = parseFloat(event.lat_max);
  var lon_max = parseFloat(event.lon_max);
  var token = event.token
   var connection = mysql.createConnection({
    host: 'whatforlunch.cnjtjqfjswwv.eu-west-1.rds.amazonaws.com',
    user: 'duccioa',
    password: 'ugnano02',
    database: 'FoodPremises'
});

   conn.connect(function(err) {   // connecting to database
      if (err) {
			     console.error('error connecting: ' + err.stack);
			     return;
	  }
	  console.log('connected as id ' + conn.threadId);
		 //console.log(conn);
   });
   
   var sql="SELECT t2.lat, t2.lon FROM tokens t1 JOIN business t2 ON t1.businessid = t2.businessid WHERE t.lat >= " + lat_min + " AND t.lat <= " + lat_max + " AND t.lon >= " + lon_min + " AND t.lon <= " + lon_max + "AND t1.token IN (\"" + token + "\");" ;  // set query  selecting the row with given token
   // Log it on the screen for debugging
        console.log(sql);
   
// Run the SQL Query
        connection.query(sql, function(err, rows, fields) {
            if (err) console.log("Err:" + err);
            if (rows !== undefined) {
                // If we have data that comes back send it to the user.
                res.send(rows);
            } else {
                res.send("");
            }
        });
}
    