var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = function(){
    var UserSchema = new Schema({
        email : {type : String, required: true},
        password: {type: String, required: true},
        account: [{type: Schema.Types.ObjectId, ref: 'Account'}]
    });
    return mongoose.model("User", UserSchema);
};
