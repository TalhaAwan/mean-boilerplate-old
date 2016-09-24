var validate = require('../utils/jsonSchemaValidator');
var userSignInSchema = require('../schemas/user-sign-in');

module.exports = function (app) {
    var UserController = app.controllers.User;
    app.post('/api/sign-in', validate(userSignInSchema), UserController.signIn);

    app.get('/api/test', function(req, res){
        res.send("Call Successful");
    })



};