// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");


// Set initial port. 
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER: The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// Points server to CSS and JS static route files
app.use(express.static(path.join(__dirname + '/app/public')));



require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);




// LISTENER: "starts" our server and listens for an event
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
