(function () {
    angular.module('EducationPortal')
        .controller('requirementController',requirementController);

    function requirementController($routeParams,courseService){
        var model = this;
        var instructorId=$routeParams.instructorId;


        function init() {
            model.lists =["general", "Learning Aims", "Requirements", "Curriculum", "Instructor", "Reviews"];
            model.requirements = courseService.getrequirements();
            model.instructorId = instructorId



        }
        init();




    }
})();

