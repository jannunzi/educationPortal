(function () {
    angular.module('EducationPortal')
        .controller('requirementsController',requirementsController);

    function requirementsController($routeParams, courseService){
        var model = this;
        var instructorId=$routeParams.instructorId;
        var courseId = $routeParams.courseId;


        function init() {
            model.lists = [
                "general",
                "Learning Aims",
                "Requirements",
                "Curriculum",
                "Instructor",
                "Reviews"
            ];
            model.requirements = courseService.getrequirements();
            model.instructorId = instructorId;
        }
        init();

        model.course = courseService.findCourseByCourseId(courseId);
    }
})();

