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
        model.updateInstructorInfo = updateInstructorInfo;

        function init() {
            model.lists =courseService.getList();

        }
        init();
        function updateInstructorInfo(instructor) {
            instructor.instructorId = model.instructorId;
            var updateInstructor= courseService.updateInstructorInfo(instructor);
            model.success = "You've saved your profile for this course.";
            //$location.url('/instructor/'+ model.instructorId +'/course/' +model.courseId +'/reviews');
            ///instructor/:instructorId/course/:courseId/reviews
        }

    }
})();