
(function () {
    angular.module('EducationPortal')
        .controller('landingController',landingController);

    function landingController($routeParams,courseService) {
        var model = this;
        var instructorId=$routeParams.instructorId;


        function init() {

            model.courses = courseService.getAllCourses();
            model.instructorId = instructorId


        }
        init();



    }
})();
