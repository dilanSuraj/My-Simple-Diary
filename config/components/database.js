var mongoose = require('mongoose');

var dbUri = 'mongodb+srv://dilan:'+process.env.PASSWORD+'@cluster0-c8hlq.mongodb.net/test?retryWrites=true&w=majority';

mongoose.Promise = require('bluebird');
mongoose.connection.openUri(dbUri, function(err, res){
    if (err) {
        console.log ('ERROR connecting to: ' + dbUri + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + dbUri);
    }
});

module.exports = mongoose;
