// Load data by linking our routes to their respective data sources.

var friendsData = require("../data/friends.js");


// ROUTING
module.exports = function(app) {

    // API GET Request. When user visits the listed endpoint, server sends a JSON response back of parameter passed in
    app.get("/api/friends", function(req, res) {

        res.json(friendsData);
    });

    function findBestFriend(user) {
        var userScores = user.scores;
        //the max difference in score between two users for each question is 4
        //there are 10 questions
        //the total max difference is 4*10
        var maxDiff = 4 * 10;
        var winningFriend;
        // iteratethru friends
        for (var i = 0; i < friendsData.length; i++) {
            var friendScores = friendsData[i].scores;
            var totalDiff = 0;
            // // iterate thru friend's scores
            for (var j = 0; j < friendScores.length; j++) {
                totalDiff = totalDiff + Math.abs(userScores[j] - friendScores[j]);
            }
            if (totalDiff <= maxDiff) {
                winningFriend = friendsData[i];
                maxDiff = totalDiff;
            }
        }
        return winningFriend;
    }

    // API POST Requests
    app.post("/api/friends", function(req, res) {
        var currentUser = req.body;
        var bestFriend = findBestFriend(currentUser);
        res.json(bestFriend);
        friendsData.push(currentUser);
    });


    // Clear data for friendsData
    app.post("/api/clear", function() {
        // Empty out the arrays of data
        friendsData = [];

        console.log(friendsData);
    });
};
