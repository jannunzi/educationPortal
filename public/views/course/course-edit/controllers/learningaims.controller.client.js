

(function () {
    angular.module('EducationPortal')
        .controller('learningAimsController',learningAimsController);

    function learningAimsController($routeParams, $location,courseService){
        var model = this;
        model.instructorId=$routeParams.instructorId;
        model.learningAimId= $routeParams.learningAimId;
        model.deleteLearningAim = deleteLearningAim;
        model.updateLearningAim = updateLearningAim;
        model.addLearningAim = addLearningAim;

        function init() {
            model.lists =["general", "Learning Aims", "Requirements", "Curriculum", "Instructor", "Reviews"];
            model.learningAims = courseService.getlearningAims();

        }
        init();

        function deleteLearningAim(){
            courseService.deleteLearningAim(model.learningAimId);
            var url = "/instructor/" + model.instructorId + "/course/" +model.courseId +"/learningaims/";
            $location.url(url);
        }

        function addLearningAim(){
            courseService.addLearningAim(course);
            var url = "/instructor/" + model.instructorId + "/course/" +model.courseId +"/learningaims/";
            $location.url(url);
        }

        function updateLearningAim(){
            courseService.updateLearningAim(course,model.learningAimId);
            var url = "/instructor/" + model.instructorId + "/course/" +model.courseId +"/learningaims/";
            $location.url(url);
        }

    }
})();

