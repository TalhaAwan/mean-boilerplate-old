/**
 * Created by talha on 9/21/16.
 */

var jwt = require('jwt-simple');

module.exports  = function(app){
    var exceptions = ['/api/sign-in'],
        exceptionFound,
        url,
        secret;

    secret = app.authenticationSecret;

    return {
        authenticate : function(req, res, next) {
            url = req.url, exceptionFound = false;
            for (var i = 0; i < exceptions.length; i++) {
                if (url.match(exceptions[i])) {
                    exceptionFound = true;
                    break;
                }
            }
            if (exceptionFound)
            {
                next();
            }
            else if(!req.headers.token)
            {
                res.status(401).send({ error: "Unauthorised" });
            }
            else
            {
                var decodedObj = jwt.decode(req.headers.token, secret);
                if (decodedObj.exp <= Date.now()) {
                    res.status(401).send({ error: "Expired Token" });
                }
                else {
                    req.userID = decodedObj.userID;
                    next();
                }
            }
        }
    };
};