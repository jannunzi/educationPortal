
(function () {
    angular.module('EducationPortal')
        .controller('landingController',landingController);

    function landingController($routeParams,courseService) {
        var model = this;
        var instructorId=$routeParams.instructorId;


        function init() {
            model.LearningAims = courseService.getAllLearningAims();
            model.instructorId = instructorId


        }
        init();



    }
})();
