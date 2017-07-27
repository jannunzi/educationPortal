/**
 * Created by wuyan on 7/23/17.
 */
(function () {
    angular.module('EducationPortal')
        .controller('courseController',courseController);

    function courseController($routeParams, $location, courseService) {
        var model = this;
        model.courseId = $routeParams.courseId;
        model.instructorId = $routeParams.instructorId;
        model.addCurriculumItem =addCurriculumItem;
        model.deleteCurriculumItem = deleteCurriculumItem;
        model.chapters =courseService.findCurriculumByCourseId(model.courseId);

        function init() {
            model.lists =courseService.getList();

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
        // function createWebsite(website) {
        //     website.developerId = model.userId;
        //     websiteService.createWebsite(website);
        //     $location.url('/user/'+model.userId+ '/website');
        // }

    }
})();