

(function () {
    angular.module('EducationPortal')
        .controller('CourseEditController',CourseEditController);

    function CourseEditController($routeParams,$location,CourseService){
        var model = this;
        var courseId = $routeParams.courseId;
        model.courseId = $routeParams.courseId;
        model.course = null;

        //model.instructorId=$routeParams.instructorId;
        model.updateCourse  = updateCourse;


        function init() {
            model.course = CourseService.findCourseByCourseId(courseId);
        }
        init();

        function updateCourse(course){
           // CourseService.updateCourse(courseId,course);
            CourseService.editCourse(courseId,course);
            var url = "/course";
            $location.url(url);

        }



    }
})();