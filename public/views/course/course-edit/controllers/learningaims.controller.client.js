

(function () {
    angular.module('EducationPortal')
        .controller('learningAimsController',learningAimsController);

    function learningAimsController($routeParams,courseService){
        var model = this;
        var instructorId=$routeParams.instructorId;
        // model.createNewCourse  = createNewCourse;

        function init() {
            model.lists =["general", "Learning Aims", "Requirements", "Curriculum", "Instructor", "Reviews"];
            model.learningAims = courseService.getlearningAims();
            model.instructorId = instructorId;
        }
        init();



    }
})();
