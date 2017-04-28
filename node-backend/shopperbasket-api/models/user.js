var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    salt: String,
    hash: String
});
var User = mongoose.model('users', UserSchema);
module.exports = mongoose.model('User', User);
