(function () {
    angular.module('EducationPortal')
        .controller('requirementsController',requirementsController);

    function requirementsController($routeParams, $location, courseService){
        var model = this;
        model.courseId = $routeParams.courseId;
        model.instructorId=$routeParams.instructorId;
        model.addRequirement = addRequirement;
        model.updateRequirement = updateRequirement;
        model.deleteRequirement = deleteRequirement;

        function init() {
            model.lists = [
                "general",
                "Learning Aims",
                "Requirements",
                "Curriculum",
                "Instructor",
                "Reviews"
            ];
            model.requirements =courseService.getRequirementsByCourseId(model.courseId);
        }
        init();

        function addRequirement(requirement){
            courseService.addRequirement(model.courseId, requirement);
            model.newRequirement = {};
            model.requirements = courseService.getRequirementsByCourseId(model.courseId);
        }

        function updateRequirement(requirement) {
            courseService.updateRequirement(requirement);
            model.requirements = courseService.getRequirementsByCourseId(model.courseId);
        }

        function deleteRequirement(requirement){
            courseService.deleteRequirement(requirement._id);
            model.requirements = courseService.getRequirementsByCourseId(model.courseId);
        }
    }
})();



