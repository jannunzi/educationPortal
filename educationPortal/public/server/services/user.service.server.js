var passport=require('passport');
var LocalStrategy =require('passport-local').Strategy;
var bcrypt=require('bcrypt-nodejs');

module.exports = function(app,userModel) {

    app.post('/api/register',register);
    app.put("/api/updateUser/:id",updateUser);

    function register(req, res) {
        var newUser = req.body;
        userModel
            .findUserByUsername(newUser.username)
            .then(
                function(user){
                    if(user) {
                        res.json(null);
                        return null;
                    } else {
                        newUser.password = bcrypt.hashSync(newUser.password);
                        userModel.createNewUser(newUser);
                        return res.json(newUser);
                    }
                },
                function(err){
                    res.status(400).send(err);
                }
            );

        //call login function after this
    }

    function updateUser(req,res) {
        var id = req.params.id;
        var updatedUserDetails = req.body;
        if (!isAdmin(req.user)) {
            delete updatedUserDetails.roles;
            updatedUserDetails.roles = ["student"];
        }
        if (typeof updatedUserDetails.roles == "string") {
            updatedUserDetails.roles = updatedUserDetails.roles.split(",");
        }
        userModel
            .findUserByUsername(updatedUserDetails.username)
            .then(function (user) {
                if (user) {
                    if(updatedUserDetails.password.length != user.password.length) {
                        updatedUserDetails.password = bcrypt.hashSync(updatedUserDetails.password);
                    }
                    userModel.updateUser(id, updatedUserDetails)
                        .then(function (user) {
                                 userModel.getUserById(id)
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
                else{
                    res.status(400).send(err);
                }
            }),
            function(err){
                res.status(400).send(err);
            };
    }
}