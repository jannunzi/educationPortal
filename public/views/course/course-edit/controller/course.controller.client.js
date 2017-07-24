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


        function init() {
            model.lists =["general", "Learning Aims", "Requirements", "Curriculum", "Instructor", "Reviews"];
            model.addCurriculumItem =addCurriculumItem;
            model.deleteCurriculumItem = deleteCurriculumItem;
            model.chapters =courseService.findCurriculumByCourseId(model.courseId);
        }
        init();

        function addCurriculumItem(curriculum) {
            curriculum.courseId = model.courseId;
            courseService.addCurriculumItem(curriculum);
            model.chapters =courseService.findCurriculumByCourseId(model.courseId);
            console.log(model.chapters);
        }

        function deleteCurriculumItem(curriculum){

        }
        // function createWebsite(website) {
        //     website.developerId = model.userId;
        //     websiteService.createWebsite(website);
        //     $location.url('/user/'+model.userId+ '/website');
        // }
    }
})();