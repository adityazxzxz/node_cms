var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    'username':{
        type:String
    },
    'name':{
        type:String
    },
    'email':{
        type:String
    },
    'password':{
        type:String
    },
    'session':{
        type:String
    }
},{
    timestamps:true
});

let User = mongoose.model('User',schema);
module.exports = {User};