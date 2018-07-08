//let Articles = require('../models/articles');
let User = require('../models/users');
const bcrypt = require('bcryptjs');

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
      message: 'Welcome to the Todos API!',
    }));

    app.post('/articles', (req, res, next) =>{

            const username = req.body.username;
            const email = req.body.email;
            const password = req.body.password;

            let newUser = new User(username,email,password);
            if(newUser) {

                newUser.createUser();
                console.log(newUser.getUser());

                // bcrypt.hash(title, 10, function (err, hash){
                //     if (err) {
                //       return next(err);
                //     }
                //     newArticle.title = hash;
                    
                //   });


            } else{
                console.log('User is empty');
            }
    });

    app.get('/logout', (req, res, next) => {
        if(req.session) {
            //delete session object
            req.session.destroy((err) => {
                if(err) return next(err);

                res.redirect('/');
            });
        }
    });

}