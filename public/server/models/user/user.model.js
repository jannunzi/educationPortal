var mongoose=require("mongoose");
var q= require("q");

module.exports= function(db){

    var UserSchema=require("./user.schema.server.js")();
    var User=mongoose.model("User",UserSchema);

    var api = {

        findUserByUsername : findUserByUsername,
        createNewUser :createNewUser,
        updateUser:updateUser,
        getUserByUserName:getUserByUserName,
        findUserByCredentials : findUserByCredentials
    }
    return api;

    function findUserByCredentials(credentials) {
        var deferred= q.defer();

        User.findOne (
            {"username": credentials.username},
            function (err, stats) {
                if(!err){
                    deferred.resolve(stats);
                }
                else{
                    deferred.reject(err);
                }
            } );
        return deferred.promise;
    }

    function findUserByUsername(userName){
        var deferred= q.defer();

        User.findOne (
            {"username": userName},
            function (err, stats) {
                if(!err){
                    console.log("model success" + userName);
                    deferred.resolve(stats);
                }
                else{
                    deferred.reject(err);
                }
            } );
        return deferred.promise;
    }

    function updateUser (currentUsername, userDetails) {
        var deferred= q.defer();
        User.update (
            {"username": currentUsername},
            {$set: {
                //"username":userDetails.username,
                "password":userDetails.password,
                "firstname":userDetails.firstname,
                "lastname":userDetails.lastname,
                "email":userDetails.email
            }},
            function (err, stats) {
                if(!err){
                    deferred.resolve(stats);
                }
                else{
                    deferred.reject(err);
                }
            } );
        return deferred.promise;
    }

    function createNewUser(userDetails) {
        var deferred = q.defer();
        User.create(userDetails, function (err, doc) {
            if (err) {
                deferred.reject(err);
            }
            else {
                console.log("no error");
            }
        });

        return deferred.promise;
    }

    function getUserByUserName(username){
        var deferred= q.defer();
        User.findOne({"username":username},function(err,doc){
            if(err){
                deferred.reject(err);
            }
            else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }
}
