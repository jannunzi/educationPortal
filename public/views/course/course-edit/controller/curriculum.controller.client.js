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
        model.updateCurriculumItem = updateCurriculumItem;
        model.chapters =courseService.findCurriculumByCourseId(model.courseId);
        model.lists =courseService.getList();
        function init() {


        }
        init();

        function updateCurriculumItem(chapterId, curriculum) {
            var result = courseService.findCurriculumById(chapterId);
            curriculum.chapter = result[0].chapter;
            curriculum.description = result[0].description;
            var index = model.chapters.indexOf(result);
            model.chapters.splice(index, 0, curriculum);
        }

        // function updatePage(pageId, page) {
        //     var foundPage = findPageById(pageId);
        //     var index = pages.indexOf(foundPage);
        //     pages.splice(index,0, page);
        //     return pages;
        //
        // }

        function addCurriculumItem(curriculum) {
            curriculum.courseId = model.courseId;
            var curriculumNew = courseService.addCurriculumItem(curriculum);
            $location.url("/instructor/"+model.instructorId+"/course/"+model.courseId+"/curriculum");
            model.chapters=courseService.findCurriculumByCourseId(model.courseId);
            ///instructor/123/course/123/curriculum
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