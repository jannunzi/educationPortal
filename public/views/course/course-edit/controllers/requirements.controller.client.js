(function () {
    angular.module('EducationPortal')
        .controller('requirementsController',requirementsController);

    function requirementsController($routeParams,courseService){
        var model = this;
        model.courseId = $routeParams.courseId;
        model.instructorId=$routeParams.instructorId;
        // model.addRequirement = addRequirement;
        // model.deleteRequirement = deleteRequirement;

        function init() {
            model.lists = [
                "general",
                "Learning Aims",
                "Requirements",
                "Curriculum",
                "Instructor",
                "Reviews"
            ];


        }
        init();


        //
        // function addRequirement(course){
        //     courseService.addRequirement(course);
        // }
        //
        // function deleteRequirement(courseId){
        //     courseService.deleteRequirement(courseId);
        //
        //
        // }
    }
})();



