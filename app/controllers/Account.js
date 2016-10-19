// controllers/Account.js
module.exports = function(app) {
    var Account  = app.models.Account;
    var Controller = {
        name: 'Account'
    };

    // POST method to create user account
    Controller.createAccount = function(req, res) {
       Account.create(req.body, function(err, result){
           if(err){
               res.status(500).send("Server Error")
           }
           else{
               res.send({message: "account created"});
           }
       })
    };

    return Controller;
};
