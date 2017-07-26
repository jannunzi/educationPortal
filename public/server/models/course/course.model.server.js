var mongoose = require('mongoose');
var courseSchema = require('./course.schema.server');
var courseModel = mongoose.model('CourseModel', courseSchema);

courseModel.createCourse = createCourse;
courseModel.deleteCourse = deleteCourse;
courseModel.updateCourse = updateCourse;
courseModel.findCourseById = findCourseById;
courseModel.findCourseByTitle = findCourseByTitle;
courseModel.findAllCourses = findAllCourses;

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


function findAllCourses() {
    return courseModel.find();
}




