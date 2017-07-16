var mongoose= require ("mongoose");

module.exports =function(){

    var UserSchema =mongoose.Schema(
        {username:String,
            password:String,
            firstname:String,
            lastname:String,
            email:String},
        {collection :'user'});
    return UserSchema;
};