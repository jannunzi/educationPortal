(function () {
    angular.module('EducationPortal')
        .factory('courseService', courseService);

    function courseService() {
        var self = this;
        var courses =
            [
                {
                    "_id": "123",
                    "instructorId": "123",
                    "courseNumber":"cs1234",
                    "courseName": "Web Development",
                    "courseUrl":"http://www.softprocomp.com/ding/wp-content/uploads/2015/07/computer-training-courses.png",
                    "courseDescription": "this course discusses Web development sites that are dynamic, data driven, and interactive. Focuses on the software development issues of integrating multiple languages, assorted data technologies, and Web interaction. Considers AngularJS, Node.js, MongoDB, HTTP, HTML, CSS, JavaScript, AJAX, SQL, and RESTful Web services. The student is introduced to Web development through live coding sessions that illustrate applying industry standards and best practices while implementing a class project. Students are then expected to practice these concepts individually by completing the same project through several assignments. As students gain confidence through the application of their skills, students move on to implement a final project of their choosing and deploy it in a publicly available server. Students may work in teams of up to 3 members. Each student or team must also create extensive documentation of their goals, plans, design decisions, accomplishments, and user guidelines. All source files must be shared in a publicly available GitHub repository."
                },
                {
                    "_id": "234",
                    "instructorId": "123",
                    "courseNumber":"cs2345",
                    "courseName": "Data Structure",
                    "courseUrl":"http://www.softprocomp.com/ding/wp-content/uploads/2015/07/computer-training-courses.png",
                    "courseDescription": "this course discusses Web development sites that are dynamic, data driven, and interactive"
                },
                {
                    "_id": "345",
                    "instructorId": "234",
                    "courseNumber":"cs3456",
                    "courseName": "Music",
                    "courseUrl":"http://www.softprocomp.com/ding/wp-content/uploads/2015/07/computer-training-courses.png",
                    "courseDescription": "that course discusses Web development sites that are dynamic, data driven, and interactive"
                },
                {
                    "_id": "456",
                    "instructorId": "234",
                    "courseNumber":"cs6789",
                    "courseName": "C++",
                    "courseUrl":"http://www.softprocomp.com/ding/wp-content/uploads/2015/07/computer-training-courses.png",
                    "courseDescription": "this course discusses Web development sites."
                }
            ];

        var requirements =
            [
                {"_id": "1", "courseId": "123", "detail": "Finish homework on time"},
                {"_id": "2", "courseId": "123", "detail": "Took CS1110 before"},
                {"_id": "3", "courseId": "123", "detail": "Know programming language"},
                {"_id": "4", "courseId": "234", "detail": "Know python"}
            ];

        var learningAims =
            [
                {"_id": "1", "courseId": "123", "detail": "be able to build a personal website"},
                {"_id": "2", "courseId": "123", "detail": "find a job"},
                {"_id": "3", "courseId": "234", "detail": "know basic data structure"}
            ];


        var api = {
            "createNewCourse": createNewCourse,
            "findCourseByCourseId": findCourseByCourseId,
            "updateCourse": updateCourse,
            "deleteCourse": deleteCourse,
            "getRequirementsByCourseId": getRequirementsByCourseId,
            "addRequirement": addRequirement,
            "updateRequirement": updateRequirement,
            "deleteRequirement": deleteRequirement
        };

        return api;

        /**
         * Functions for all course page
         */

        function getSideList() {

        }


        /**
         * Functions for course general page
         *
         */

        //Create new course
        function createNewCourse(course) {
            var newCourse = {};
            newCourse._id = (new Date()).getTime()+"";
            newCourse.courseName = course.courseName;
            newCourse.courseNumber = course.courseNumber;
            newCourse.courseDescription = course.description;
            courses.push(newCourse);
        }

        //Find course by course id
        function findCourseByCourseId(courseId) {
            var result = {};
            for( var i in courses){
                if(courses[i]._id === courseId){
                    result = courses[i];
                    break;
                }
            }
            return result;
        }

        //Update course
        function updateCourse(courseId,course) {
            for (var i in courses) {
                if(courses[i]._id === courseId) {
                    courses[i] = course;
                    return true;
                }
            }
            return false;
        }

        //Delete course
        function deleteCourse(courseId) {
            var course = courses.find(function (course) {
                return course._id === courseId;
            });
            var index = courses.indexOf(course);
            if (index >= 0) {
                courses.splice(index, 1);
            }
        }

        /**
         * Functions for course requirement
         */

        //Get requirements by course id
        function getRequirementsByCourseId(courseId) {
            var result = [];
            for(var i in requirements) {
                var requirement = requirements[i];
                if (requirement.courseId === courseId) {
                    result.push(requirement);
                }
            }
            return result;
        }

        //Add new requirement
        function addRequirement(courseId, requirement){
            var newRequirement = {};
            newRequirement._id =  (new Date()).getTime()+"";
            newRequirement.courseId = courseId;
            newRequirement.detail = requirement.detail;
            requirements.push(newRequirement);
        }

        //Update requirement
        function updateRequirement(newRequirement) {
            for (var i in requirements) {
                var requirement = requirements[i];
                if (requirement._id = newRequirement._id) {
                    requirements[i] = newRequirement;
                    break;
                }
            }
        }

        //Delete requirement
        function deleteRequirement(requirementId) {
            var requirement = requirements.find(function (requirement) {
               return requirement._id = requirementId;
            });
            var index = requirements.indexOf(requirement);
            if (index >= 0) {
                requirements.splice(index, 1);
            }
        }



        function getrequirements(){
            return courses;
        }

        function getAllCourses(){
            return courses;
        }

        function getlearningAims(){
            return courses;
        }








        // function deleteRequirement(courseId){
        //
        //
        // }
        function addLearningAim(course){

        }

        function updateLearningAim() {

        }

        function deleteLearningAim() {

        }

    }
})();
