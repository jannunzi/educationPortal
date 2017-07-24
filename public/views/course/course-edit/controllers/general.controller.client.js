// (function () {
//     angular
//         .module('EducationPortal')
//         .controller('GeneralController', GeneralController);
//
//     function GeneralController($routeParams, websiteService) {
//
//         var model = this;
//         model.userId = $routeParams['uid'];
//
//         function init() {
//             model.websites = websiteService.findAllWebsitesForUser(model.userId);
//         }
//         init();
//     }
// })();

(function () {
    angular.module('EducationPortal')
        .controller('generalController',generalController);

    function generalController($routeParams, $location, courseService) {
        var model = this;
        model.courseId = $routeParams.courseId;
        model.instructorId = $routeParams.instructorId;
        model.addCurriculumItem =addCurriculumItem;
        model.deleteCurriculumItem = deleteCurriculumItem;
        model.chapters =courseService.findCurriculumByCourseId(model.courseId);

        function init() {
            model.lists =["general", "Learning Aims", "Requirements", "Curriculum", "Instructor", "Reviews"];

        }
        init();

        function addCurriculumItem(curriculum) {
            curriculum.courseId = model.courseId;
            courseService.addCurriculumItem(curriculum);
            model.chapters =courseService.findCurriculumByCourseId(model.courseId);
        }

        function deleteCurriculumItem(chapterId){
            courseService.deleteCurriculumItem(chapterId);
            model.chapters =courseService.findCurriculumByCourseId(model.courseId);
        }

    }
})();