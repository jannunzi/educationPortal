

(function () {
    angular.module('EducationPortal')
            .controller('createNewCourseController',createNewCourseController);

    function createNewCourseController($routeParams,$location,courseService){
        var model = this;
        model.instructorId=$routeParams.instructorId;
        model.createNewCourse  = createNewCourse;

        function init() {
            model.lists =["general", "Learning Aims", "Requirements", "Curriculum", "Instructor", "Reviews"];
        }
        init();

        function createNewCourse(course){
            courseService.createNewCourse(course);
            var url = "/instructor/" + model.instructorId + "/course/course-landing";
            $location.url(url);
        }



    }
})();