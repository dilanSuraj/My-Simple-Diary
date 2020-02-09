var User = require('../models/user');


module.exports.create = function (req, res) {
    res.render('user/create.html', { action: 'create' });
}

module.exports.login = function (req, res) {
    res.render('user/login.html', { action: 'login' });
}

module.exports.save = function (req, res) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) console.log('Error on registration');
        console.log('Registered successfully');
        return res.redirect('/note');
    });
}

module.exports.loginPost = function (req, res) {
    console.log(req.body);
    User.findOne({ username: req.body.username, password: req.body.password }, function (err, user) {
        if (!err) {
            if (user != null)
                return res.redirect('/note');
            else
                return res.redirect('login');
        } else {
            console.log(err);
            return res.redirect('login'); // 500 error
        }
    });
}
