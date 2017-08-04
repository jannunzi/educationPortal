
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
      
       var lists =[{title:"General", link:'general'},
            {title:"Learning Aims", link:'learningaims'},
            {title:"Requirements", link:'requirements'},
            {title:"Curriculum", link:"curriculum"},
            {title:"Instructor", link:"instructor"},
            {title:"Reviews", link:'reviews'}];

        var curriculum =
            [
                {courseId: "123", _id:"1231", chapter:"Alice", description:"Wonderland"  },
                {courseId: "123", _id:"1232", chapter:"Bob", description:"Wonderland"  },
                {courseId: "123", _id:"1233", chapter:"Charly", description:"Wonderland"  }
            ];
        var course=
            [
                {_id: "123", instructorId: "123",    description: "alice",    review: "Alice",  courseName: "Wonder", curriculum:curriculum[0]  },
                {_id: "234", instructorId: "123",      description: "bob",      review: "Bob",    courseName: "Marley", email: "bob@gmail.com", curriculum:curriculum[1]  },
                {_id: "345", instructorId: "234",   description: "charly",   review: "Charly", courseName: "Garcia", curriculum:curriculum[2]  },
                {_id: "456", instructorId: "234", description: "jannunzi", review: "Jose",   courseName: "Annunzi", curriculum:"aaaaa" }
            ];
        var instructors=[
            {courseId: "123", instructorId:"123", instructorName:"Alice", instructorDescription:"Great teacher!!!", reviewsId:'123'},
            {courseId: "234", instructorId:"234", instructorName:"Bob", instructorDescription:"Great teacher2!!!", reviewsId:'234'},
            {courseId: "345", instructorId:"345", instructorName:"Charly", instructorDescription:"Great teacher3!!!", reviewsId:'345'}
        ];

        var reviews = [
            {courseId:"123", reviewsId:"123", url:"https://github.com", title:"Best Teacher Ever!", details:"I've been trying to learn this material for a year, using multiple online bootcamps and courses. Colt is by far the best teacher that I've encountered, and his course is far more logically organized than any other course that I've encountered. "}
        ];


        var api = {
            "createNewCourse": createNewCourse,
            //"findCourseByCourseId": findCourseByCourseId,
            "updateCourse": updateCourse,
            "deleteCourse": deleteCourse,
            "getRequirementsByCourseId": getRequirementsByCourseId,
            "addRequirement": addRequirement,
            "updateRequirement": updateRequirement,
            "deleteRequirement": deleteRequirement,
            "getlearningAimsByCourseId" : getlearningAimsByCourseId,
            "deleteLearningAim" : deleteLearningAim,
            "updateLearningAim" :updateLearningAim,
            "addLearningAim" :addLearningAim,
            "getAllCourses" :getAllCourses,
            "findCourseByInstructorId" : findCourseByInstructorId,
            //findCourseByCourseId : findCourseByCourseId,
            "findCurriculumByCourseId": findCurriculumByCourseId,
            "addCurriculumItem": addCurriculumItem,
            "deleteCurriculumItem": deleteCurriculumItem,
            "findInstructorById":findInstructorById,
            "updateInstructorInfo": updateInstructorInfo,
            "addReviews": addReviews,
            "getList":getList,
            "findCurriculumById": findCurriculumById
        };
  

        return api;

        /**
         * Functions for all course page
         */

        function getSideList() {

        }

        /**
         * Functions for landing page
         */

        function getAllCourses(){
            return courses;
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
            for( var c in course){
                if(course[c]._id===courseId){
                    results.push(course[c]);
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

        // function createUser(user) {
        //     user._id=(new Date()).getTime()+'';
        //     user.created = new Date();
        //     users.push(user);
        //     return user;
        // }
        //
        // function findUserBycourseName(courseName) {
        //     var user = users.find(function (user) {
        //         return user.courseName === courseName;
        //     });
        //     if(typeof user ==='undefined'){
        //         return null;
        //     }
        //     return user;
        // }
        //
        // function findUserById(courseId) {
        //     for(var u in users){
        //         if(users[u]._id===courseId){
        //             return users[u];
        //         }
        //     }
        //     return null;
        // }
        //
        // function findUserByCredentials(courseName, description) {
        //     for(var u in users){
        //         var user= users[u];
        //         if(user.courseName === courseName && user.description === description){
        //             return user;
        //         }
        //     }
        //     return null;
        // }
    }
})();
