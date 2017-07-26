const app = require('../../../express');
var courseModel = require('../models/course/course.model.server');

module.exports = function (app, courseModel) {

app.post('/api/course', createCourse);
app.get('/api/course', findAllCourses);
app.get('/api/course/:courseId', findCourseById);
app.put('/api/course/:courseId', updateCourse);
app.delete('/api/course/:courseId', deleteCourse);



function createCourse(req, res) {
    var course = req.body;
    courseModel
        .createCourse(course)
        .then(function (course) {
            res.json(course);
        });
}

function findAllCourses(req, res) {
    var course = req.body;
    courseModel
        .findAllCourses()
        .then(function (course) {
            res.json(course);
        })
}

function findCourseById(req, res) {
    var courseID = req.params['courseId'];
    var course = req.body;
    courseModel
        .findCourseById(courseID)
        .then(function (course) {
            res.json(course);
        });
}

function updateCourse(req, res) {
    var course = req.body;
    courseModel
        .updateCourse(req.params.courseId, course)
        .then(function (status) {
            res.send(status);
        });
}

function deleteCourse(req, res) {
    var courseId = req.params.courseId;
    websiteModel
        .deleteCourse(courseId)
        .then(function (status) {
            res.send(status);

        });
}
};

