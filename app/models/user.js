var db = require('../../config/components/database');

var userSchema = new db.Schema({
    username: String,
    password: String
})

var User = db.model('User', userSchema);

module.exports = User;