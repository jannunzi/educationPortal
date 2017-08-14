var mongoose= require ("mongoose");

module.exports =function(){

    var CourseSchema = mongoose.Schema({
        courseName:String,
        courseNumber:String,
        createdDate: {type: Date, default: Date.now},
        courseInstructor: String,
        courseDescription:String
    }, {collection: "course"});
    return CourseSchema;
};
