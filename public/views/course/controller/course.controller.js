

(function () {
    angular.module('EducationPortal')
        .controller('CourseController',CourseController);

    function CourseController($routeParams,$location,CourseService){
        var model = this;
        //model.instructorId=$routeParams.instructorId;
        model.createNewCourse  = createNewCourse;

        function init() {

        }
        init();

        function createNewCourse(course){
            CourseService.createNewCourse(course);
            var url = "/course";
            $location.url(url);
        }



    }
})();