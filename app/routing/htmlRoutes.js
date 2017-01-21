// DEPENDENCIES
// Path package to get the correct file path for our html

var path = require('path');


// ROUTING
module.exports = function(app) {
    // HTML GET Requests. When users visit a page/endpoint, show the corresponding HTML page to user

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });


    app.get('/credits', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/credits.html'));
    });

    // If no matching route is found default to home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};
