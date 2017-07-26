
(function () {
    angular.module('EducationPortal')
        .controller('generalController',generalController);

    function generalController($routeParams, $location, courseService) {
        var model = this;
        model.courseId = $routeParams.courseId;
        model.instructorId = $routeParams.instructorId;


        function init() {
            model.lists =["general", "Learning Aims", "Requirements", "Curriculum", "Instructor", "Reviews"];

        }
        init();



    }
})();