/**
 * Created by wuyan on 7/23/17.
 */
(function () {
    angular.module('EducationPortal')
        .controller('instructorController',instructorController);

    function instructorController($routeParams, $location, courseService) {
        var model = this;
        model.courseId = $routeParams.courseId;
        model.instructorId = $routeParams.instructorId;
        model.instructor =courseService.findInstructorById(model.instructorId);

        function init() {
            model.lists =["general", "Learning Aims", "Requirements", "Curriculum", "Instructor", "Reviews"];

        }
        init();

    }
})();