
(function () {
    angular.module('EducationPortal')
        .controller('generalController',generalController);

    function generalController($routeParams, $location, courseService) {
        var model = this;
        model.courseId = $routeParams.courseId;
        model.instructorId = $routeParams.instructorId;
        model.deleteCourse = deleteCourse;
        model.updateCourse = updateCourse;

        function init() {
            model.lists =["general", "Learning Aims", "Requirements", "Curriculum", "Instructor", "Reviews"];
            model.course = courseService.findCourseByCourseId(model.courseId);
        }
        init();

        function deleteCourse(){
            courseService.deleteCourse(model.courseId);
            var url = "/instructor/" + model.instructorId + "/course/course-landing";
            $location.url(url);
        }

        function updateCourse(){
            courseService.updateCourse(model.courseId, model.course);
            var url = "/instructor/" + model.instructorId + "/course/" + model.courseId+"/general";
            $location.url(url);
        }


    }
})();






