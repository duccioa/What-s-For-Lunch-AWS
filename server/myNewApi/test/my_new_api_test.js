var assert = require("chai").assert;
var myNewApi = require("../lib/my_new_api.js");
describe("myNewApi", function () { 
  it("exports handleRequest", function () { assert.typeOf(myNewApi.handleRequest, "function"); });});
  