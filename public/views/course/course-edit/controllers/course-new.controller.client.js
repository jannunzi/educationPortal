

(function () {
    angular.module('EducationPortal')
            .controller('createNewCourseController',createNewCourseController);

    function createNewCourseController($routeParams,$location,CourseService){
        var model = this;
        model.instructorId=$routeParams.instructorId;
        model.createNewCourse  = createNewCourse;

        function init() {
            model.lists =["general", "Learning Aims", "Requirements", "Curriculum", "Instructor", "Reviews"];
        }
        init();

        function createNewCourse(course){
            CourseService.createNewCourse(course);
            var url = "/course";
            $location.url(url);
        }



    }
})();