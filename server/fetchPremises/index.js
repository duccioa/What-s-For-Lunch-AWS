// Reference at:
// http://stackoverflow.com/a/33112844/5276212
console.log('Loading fetchPremises Function');
var pg = require("pg");
var packag = require("./package.json");
console.log("loaded " + packag.name + ", version " + packag.version);
exports.handler = function(event, context) {   
    var conn = "pg://duccioWhatLunch:ugnano02@whatlunch.cnjtjqfjswwv.eu-west-1.rds.amazonaws.com:5432/foodpremises";
    var token = event.token;
    var client = new pg.Client(conn);
    client.connect();
  console.log("Query sushi");
    var query = client.query("SELECT t2.businessname AS businessname, ST_Y(t2.geom) AS lat, ST_X(t2.geom) AS lon FROM tokens t1 JOIN business t2 ON t1.businessid = t2.businessid WHERE t1.token = '" + token + "';");
    query.on("row", function (row, result) {
        result.addRow(row);
    });
    query.on("end", function (result) {
        var jsonString = JSON.stringify(result.rows);
        var jsonObj = JSON.parse(jsonString);
        console.log(jsonString);
        client.end();
        context.succeed(jsonObj);
    });
 };
