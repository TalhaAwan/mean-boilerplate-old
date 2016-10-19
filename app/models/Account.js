// models/Account.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = function(){
    var AccountSchema = new Schema({
        email : {type : String, required: true},
        password: {type: String, required: true},
        account: {type: Schema.Types.ObjectId, ref: 'User'}
    });
    return mongoose.model("Account", AccountSchema);
};
