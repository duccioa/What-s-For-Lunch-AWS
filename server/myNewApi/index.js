var packag = require("./package.json");
var myNewApi = require("./lib/my_new_api.js");
console.log("loaded " + packag.name + ", version " + packag.version);
exports.handler = function (event, context) {
myNewApi.handleRequest(event, context.done);
}