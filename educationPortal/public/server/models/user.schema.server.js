var mongoose= require ("mongoose");

module.exports =function(){

    var UserSchema =mongoose.Schema(
        {username:String,
            password:String,
            firstName:String,
            lastName:String,
            email:String,
            phones:[String]},
        {collection :'user'});
    return UserSchema;
};