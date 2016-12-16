var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'whatforlunch.cnjtjqfjswwv.eu-west-1.rds.amazonaws.com',
  user: 'duccioa',
  password: 'ugnano02',
  database: 'FoodPremises',
  connectionLimit: 100,
  debug: false
});

//connection.connect();

exports.model = connection;