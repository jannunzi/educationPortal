var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

module.exports = function (app, userModel) {

    app.post('/api/register', register);
    app.put("/api/updateUser", updateUser);

    function register(req, res) {
        var newUser = req.body;
        userModel
            .findUserByUsername(newUser.username)
            .then(
                function (user) {
                    if (user) {
                        res.json(null);
                        return null;
                    } else {
                        newUser.password = bcrypt.hashSync(newUser.password);
                        userModel.createNewUser(newUser);
                        return res.json(newUser);
                    }
                },
                function (err) {
                    res.status(400).send(err);
                }
            );

        //call login function after this
    }

    function updateUser(req, res) {
        //var id = req.params.id;
        var updatedUserDetails = req.body;
        var currentUsername = updatedUserDetails.username;
        userModel.updateUser(currentUsername, updatedUserDetails)
            .then(function (user) {
                    userModel.findUserByUsername(currentUsername)
                        .then(function (response) {
                                res.json(response);
                            },
                            function (err) {
                                res.status(400).send(err);
                            });
                },
                function (err) {
                    res.status(400).send(err);
                });

    }
}