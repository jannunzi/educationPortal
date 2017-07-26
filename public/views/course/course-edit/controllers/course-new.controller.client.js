

(function () {
    angular.module('EducationPortal')
            .controller('createNewCourseController',createNewCourseController);

    function createNewCourseController($routeParams,$location,courseService){
        var model = this;
        var instructorId=$routeParams.instructorId;
        model.createNewCourse  = createNewCourse;

        function init() {
            model.lists =["general", "Learning Aims", "Requirements", "Curriculum", "Instructor", "Reviews"];



        }
        init();



        function createNewCourse(course){
            courseService.createNewCourse(course);
            $location.url("/instructor/+ model.instructorId +/course/new");
        }



    }
})();