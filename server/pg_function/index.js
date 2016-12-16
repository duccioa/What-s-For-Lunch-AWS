console.log('Loading S2 Function');
var pg = require("pg");
var packag = require("./package.json");
//var token = event.token;
console.log("loaded " + packag.name + ", version " + packag.version);
exports.handler = function(event, context) {   
    var conn = "pg://duccioWhatLunch:ugnano02@whatlunch.cnjtjqfjswwv.eu-west-1.rds.amazonaws.com:5432/foodpremises";
    
    var client = new pg.Client(conn);
    client.connect();
  console.log("Query sushi");
    var query = client.query("SELECT t2.businessname AS businessname, t1.token AS token, t2.lat AS lat, t2.lon AS lon FROM tokens t1 JOIN business t2 ON t1.businessid = t2.businessid WHERE t1.token = 'sushi' LIMIT 10;");// + token + "';");
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
