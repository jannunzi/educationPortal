
(function () {
    "use strict";
    angular.module("EducationPortal")
        .controller("CourseAllController",CourseAllController);

    function CourseAllController($routeParams,CourseService,$location) {
        var model = this;
        var instructorId=$routeParams.instructorId;


        model.courseDetail = courseDetail;

        function init() {

            /*CourseService.getAllCourses().
            then(function(response){
                console.log("the response for courses");
                console.log("the", response.data);
                model.courses=response.data;
            },function(err){
                console.log(err);
            })

            console.log("hey");
             model.instructorId = instructorId;*/

            model.courses = CourseService.getAllCourses();
            model.instructorId = instructorId;

        }
        init();

        function courseDetail(course){
            $routeParams.courseId = course._id;
            //$location.url("/courseDetails/"+ course._id);
            $location.url("/course/edit/" + course._id);
        }
    }
})();
