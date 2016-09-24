var async = require("async");
var jwt = require('jwt-simple');


module.exports = function(app) {
    var User  = app.models.User;
    var secret = app.authenticationSecret;
    var Controller = {
        name: 'User'
    };
    Controller.signIn = function(req, res) {
        if(req.body.email != "talha@gmail.com" || req.body.password != "123"){
            res.status(403).send("Invalid credentials")
        }
        else{
            var user = {
                email: "talha@gmail.com",
                _id: "1767427238928"
            }
            var sessionObj = genToken(user);
            res.send(sessionObj)
        }
    }

    function genToken(user) {
        var expires = expiresIn(1); // 2 days
        var token = jwt.encode({
            exp: expires,
            userId: user._id
        }, secret);

        return {
            token: token,
            expires: 30,
            user: user.email
        };
    }
    function expiresIn(numMins)
    {
        var dateObj = new Date();
        return dateObj.setMinutes(dateObj.getMinutes() + numMins);
    }

    return Controller;
};
