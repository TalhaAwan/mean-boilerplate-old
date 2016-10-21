// models/Account.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = function(){
    var AccountSchema = new Schema({
        number : {type : String, required: true},
        user: {type: Schema.Types.ObjectId, ref: 'User'}
    });
    return mongoose.model("Account", AccountSchema);
};
