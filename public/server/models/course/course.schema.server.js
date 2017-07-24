var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title:String,
    createdDate: {type: Date, default: Date.now},
    author:[{type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}],
    description:String
}, {collection: "graduate_user"});

module.exports = courseSchema;