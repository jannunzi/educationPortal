
(function () {
    angular.module('EducationPortal')
        .factory('CourseService', CourseService);

    function CourseService($http) {

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

        var api = {
            "editCourse": editCourse,
            "createNewCourse": createNewCourse,
            "findCourseByCourseId": findCourseByCourseId,
            "getAllCourses" :getAllCourses

        };
        return api;

        /**
         * Functions for landing page
         */

        function getAllCourses(){
            return courses;
            //return $http.get("/api/allCourses");

        }

        //Create new course
        function createNewCourse(course) {
            var newCourse = {};
            newCourse._id = (new Date()).getTime()+"";
            newCourse.courseName = course.courseName;
            newCourse.courseNumber = course.courseNumber;
            newCourse.courseDescription = course.description;
            courses.push(newCourse);

          //  return $http.post("/api/newCourse", course);
        }

        function editCourse(courseId,course){
            for (var i in courses) {
                console.log("******",i);
                if(courses[i]._id === courseId) {
                    courses[i] = course;
                    return true;
                }
            }
            return false;
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

        function getList() {
            return lists;
        }

        function findCurriculumById(_id) {
            var result=[];
            for(var c in curriculum){
                if(curriculum[c]._id ==_id){
                    result.push(curriculum[c]);
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



        //Get learning Aim by course id
        function getlearningAimsByCourseId(courseId){
            var result=[];
            for(var i in learningAims ){
                var learningAim=learningAims[i];
                if (learningAim.courseId === courseId) {
                    result.push(learningAim);
                }
            }
             return result;
        }

        //add Learning Aim
        function addLearningAim(courseId, learningAim){
            if (!learningAim.detail) {
                return;
            }
            var newLearningAim = {};
            newLearningAim._id =  (new Date()).getTime()+"";
            newLearningAim.courseId = courseId;
            newLearningAim.detail = learningAim.detail;
            learningAims.push(newLearningAim)
        }

        //update Learning Aims
        function updateLearningAim(newLearningaim) {
            for (var i in learningAims) {
                var learningaim = learningAims[i];
                if (learningaim._id === newLearningaim._id) {
                    learningAims[i] = newLearningaim;
                    break;
                }
            }
        }

        //Delete LearningAim
        function deleteLearningAim(learningaimId) {
            var learningaim = learningAims.find(function (learningaim) {
                return learningaim._id = learningaimId;
            });
            var index = learningAims.indexOf(learningaim);
            if (index >= 0) {
                learningAims.splice(index, 1);
            }
        }
    }

        function addReviews(_review) {
            _review._id = (new Date()).getTime()+"";
            reviews.push(_review);
            return reviews;
        }
        function updateInstructorInfo(_instructor) {
            var instructor = findInstructorById(_instructor.instructorId);
            instructor[0].instructorName = _instructor.instructorName;
            instructor[0].newDescription = _instructor.instructorDescription;
            return instructor;
        }

        function findCourseByInstructorId(instructorId) {
            var results=[];
            for( var c in course){
                if(course[c].instructorId===instructorId){
                    results.push(course[c]);
                }
            }
            return results;
        }
        
        function findCourseByCourseId(courseId) {
            var results=[];
            for( var c in courses){
                if(courses[c]._id===courseId){
                    results.push(courses[c]);
                }
            }
            return results;
        }

        function findCurriculumByCourseId(courseId) {
            var results=[];
            for( var c in curriculum){
                if(curriculum[c].courseId===courseId){
                    results.push(curriculum[c]);
                }
            }
            return results;
        }
        function fincChapterById(chapterId) {
            var results=[];
            for( var c in curriculum){
                if(curriculum[c]._id===chapterId){
                    results.push(curriculum[c]);
                }
            }
            return results;
        }

        function addCurriculumItem(_curriculum) {
            _curriculum._id = (new Date()).getTime()+"";
            curriculum.push(_curriculum);
            return curriculum;
        }
        function deleteCurriculumItem(chapterId) {
            var result = fincChapterById(chapterId);
            var index = curriculum.indexOf(result[0]);
            curriculum.splice(index,1);
            return curriculum;
        }
        function findInstructorById(id) {
            var results=[];
            for( var i in instructors){
                if(instructors[i].instructorId===id){
                    results.push(instructors[i]);
                }
            }
            return results;
        }
    }
})();
