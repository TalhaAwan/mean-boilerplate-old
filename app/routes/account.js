// routes/account.js
module.exports = function (app) {
    var AccountController = app.controllers.Account;
    app.post('/api/accounts', AccountController.createAccount);
};