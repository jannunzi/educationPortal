(function() {
    angular
        .module("EducationPortal")
        .factory("SectionService", SectionService);


    function UserService($http) {
        var api = {
            "createSection": createSection,
            "findAllSectionForCourse": findAllSectionForCourse,
            "findSectionById": findSectionById,
            "updateSection": updateSection,
            "deleteSection": deleteSection
        };

        return api;

        function createSection(courseId, section) {
            var url = '/api/course/' + courseId + '/section';

            return $http.post(url, section);
        }

        function findAllSectionForCourse(courseId) {
            var url = '/api/course/' + courseId + '/section';

            return $http.get(url);
        }

        function findSectionById(sectionId) {
            var url = '/api/section/' + sectionId;

            return $http.get(url);
        }

        function updateSection(sectionId, section) {
            var url = '/api/section/' + sectionId;

            return $http.put(url, section);
        }

        function deleteSection(sectionId) {
            var url = '/api/section/' + sectionId;

            return $http.delete(url);
        }
    }
})();