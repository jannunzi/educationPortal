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
            model.curriculum={chapter:"", description:"", courseId:"", _id:""};
        }
        init();

        function updateCurriculumItem(chapterId) {
            var result = courseService.findCurriculumById(chapterId);
            model.curriculum = result[0];
            var index = model.chapters.indexOf(result[0]);
            model.chapters.splice(index, 1, model.curriculum);
        }

        // function updatePage(pageId, page) {
        //     var foundPage = findPageById(pageId);
        //     var index = pages.indexOf(foundPage);
        //     pages.splice(index,0, page);
        //     return pages;
        //
        // }

        function addCurriculumItem(_curriculum) {
            var curriculum={chapter:"", description:"", courseId:"", _id:""};
            curriculum.chapter = _curriculum.chapter;
            curriculum.description = _curriculum.description;
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