var friendsData = require("../data/friends");

var htmlRoutes = require("../routing/htmlRoutes.js");

module.exports = function(app){

    app.get("/api/friendsList", function(req, res){
        res.json(friendsData);
    });

    app.post("/api/friendsList", function(req, res){
        var newFriend = req.body;
        var matchedFriend = [];

        var totalDifference = 0;
        for (var i = 0; i < friends.length; i++) {
            var dbFriends = friends[i];
            totalDifference = 0;
            for (var j = 0; j < dbFriends.scores.length; j++) {
                totalDifference += Math.abs(newFriend.scores[j] - dbFriends.scores[j]);
            }
            
            matchedFriend.push({
                name: dbFriends.name,
                photo: dbFriends.photo,
                totalDifference: totalDifference
            });
           
        }


        friends.push(newFriend);
        //loop through value of each survey question and compare each question to previous items in the array
        //find the difference for each question
        //add the total difference for each person
        //select the person with the least total difference
        matchedFriend.sort(function (a, b) {
            return parseFloat(a.totalDifference) - parseFloat(b.totalDifference);
        });
        res.json(matchedFriend[0]);

    })
}