var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = function(){
    var UserSchema = new Schema({
        email : {type : String, required: true},
        password: {type: String, required: true}
    });
    return mongoose.model("User", UserSchema);
};
