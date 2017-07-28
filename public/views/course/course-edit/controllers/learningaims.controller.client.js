

(function () {
    angular.module('EducationPortal')
        .controller('learningAimsController',learningAimsController);

    function learningAimsController($routeParams, courseService) {
        var model = this;
        model.courseId = $routeParams.courseId;
        model.instructorId = $routeParams.instructorId;
        model.learningAimId = $routeParams.learningAimId;
        model.deleteLearningAim = deleteLearningAim;
        model.updateLearningAim = updateLearningAim;
        model.addLearningAim = addLearningAim;

        function init() {
            model.lists = ["general", "Learning Aims", "Requirements", "Curriculum", "Instructor", "Reviews"];
            model.learningaims = courseService.getlearningAimsByCourseId(model.courseId);

        }

        init();

        function addLearningAim(learningaim) {
            courseService.addLearningAim(model.courseId, learningaim);
            model.newLearningaim = {};
            model.learningaims = courseService.getlearningAimsByCourseId(model.courseId);
        }


        function updateLearningAim(learningaim) {
            courseService.updateLearningAim(learningaim);
            model.learningaims = courseService.getlearningAimsByCourseId(model.courseId);
        }

        function deleteLearningAim(learningaim) {
            courseService.deleteLearningAim(learningaim);
            model.learningaims = courseService.getlearningAimsByCourseId(model.courseId);
        }
    }
})();

