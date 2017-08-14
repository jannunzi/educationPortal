/*
var mongoose = require('mongoose');
var courseSchema = require('./course.schema.server');
var courseModel = mongoose.model('CourseModel', courseSchema);

courseModel.createCourse = createCourse;
courseModel.deleteCourse = deleteCourse;
courseModel.updateCourse = updateCourse;
courseModel.findCourseById = findCourseById;
courseModel.findCourseByTitle = findCourseByTitle;

module.exports = courseModel;



function createCourse(course) {
    return courseModel.create(course);
}

function deleteCourse(courseId) {
    return courseModel.remove({_id: courseId});
}

function updateCourse(courseId, course) {
    return courseModel.update(
        {_id: courseId},
        {$set: course}
    );
}

function findCourseById(courseId) {
    return courseModel.findById(courseId);
}

function findCourseByTitle(title) {
    return courseModel.find({title: title});
}

*/


var mongoose=require("mongoose");
var q= require("q");

module.exports= function(db){

    var CourseSchema=require("./course.schema.server.js")();
    var Course=mongoose.model("Course",CourseSchema);

    var api = {

        createCourse : createCourse,
        getAllCourses :getAllCourses
    }
    return api;

    function createCourse(newCourse) {
        var deferred = q.defer();
        Course.create(newCourse, function (err, doc) {
            if (err) {
                deferred.reject(err);
            }
            else {
                console.log("no error");
            }
        });

        return deferred.promise;

    }

    function getAllCourses() {
        var deferred = q.defer();
        Course.find(function (err, courses) {
            if (err) {
                console.log("err");
                deferred.reject(err);
            }
            else {
                console.log("no @@@err", courses);
                //return courses;
                deferred.resolve(courses);
            }
        });

        console.log("defered promise",deferred.promise);
        return deferred.promise;

    }
}






