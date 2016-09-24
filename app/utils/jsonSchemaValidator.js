var Validator = require('jsonschema').Validator;
var v = new Validator();
module.exports  = function(schema){
    return function (req, res, next){
        var body = v.validate(req.body, schema);
        if(body.valid){
            next()
        }
        else{
            res.status(400).json(body.errors)
        }
    }
}
