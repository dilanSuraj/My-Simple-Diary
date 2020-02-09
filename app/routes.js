var Note = require('./controller/note');
var User = require('./controller/user');

module.exports = function(app){

    app.get('/', function(req, res){
        res.render('home.html');
    });

    app.get('/note', Note.index);

    app.get('/note/create', Note.create);
    app.post('/note/create', Note.save);

    app.get('/note/:id', Note.get);

    app.get('/note/:id/edit', Note.edit);
    app.post('/note/:id/edit', Note.update);

    app.get('/note/:id/delete', Note.delete);

    app.get('/user/create', User.create);
    app.post('/user/create', User.save);

    app.get('/user/login', User.login);
    app.post('/user/login', User.loginPost);
}
