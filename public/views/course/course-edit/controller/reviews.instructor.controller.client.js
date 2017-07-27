/**
 * Created by wuyan on 7/23/17.
 */
(function () {
    angular.module('EducationPortal')
        .controller('reviewsController',reviewsController);

    function reviewsController($routeParams, $location, courseService) {
        var model = this;
        model.courseId = $routeParams.courseId;
        model.instructorId = $routeParams.instructorId;
        model.instructor =courseService.findInstructorById(model.instructorId);
        model.addReviews = addReviews;

        function init() {
            model.lists =courseService.getList();

        }
        init();
        function addReviews(review) {
            review.courseId = model.courseId;
            courseService.addReviews(review);
            model.success = "You've saved the review of this course.";
        }

    }
})();