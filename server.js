/*******************************
 * REQUIREMENTS******************
 ********************************/
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//connect routes to server
require('./routing/htmlRoutes')(app)
require('./routing/apiRoutes')(app)



app.listen(port, function(){
    console.log("App is listening on port" + port)
})