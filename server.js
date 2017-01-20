// ==============================================================================
// EXPRESS CONFIGURATION
var express = require("express");
//bodyparser only for POST data
var bodyParser = require("body-parser");
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. 
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER: The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// LISTENER: "starts" our server and listens for an event
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
