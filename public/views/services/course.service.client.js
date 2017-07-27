(function () {
    angular.module('EducationPortal')
        .factory('courseService', courseService);

    function courseService() {
        var self = this;
        var courses =
            [
                {"_id": "123", "instructorId": "123",   "courseName":"cs1234", "requirements":["Be ready to learn an insane amount of awesome stuff1", "ask questions", "submit hw on time"] ,"learningAims":"Make REAL web applications using cutting-edge technologies,i have no idea", "courseUrl":"http://www.softprocomp.com/ding/wp-content/uploads/2015/07/computer-training-courses.png", "courseDescription": "this course discusses Web development sites that are dynamic, data driven, and interactive. Focuses on the software development issues of integrating multiple languages, assorted data technologies, and Web interaction. Considers AngularJS, Node.js, MongoDB, HTTP, HTML, CSS, JavaScript, AJAX, SQL, and RESTful Web services. The student is introduced to Web development through live coding sessions that illustrate applying industry standards and best practices while implementing a class project. Students are then expected to practice these concepts individually by completing the same project through several assignments. As students gain confidence through the application of their skills, students move on to implement a final project of their choosing and deploy it in a publicly available server. Students may work in teams of up to 3 members. Each student or team must also create extensive documentation of their goals, plans, design decisions, accomplishments, and user guidelines. All source files must be shared in a publicly available GitHub repository."  },
                {"_id": "234", "instructorId": "123",   "courseName":"cs2345", "requirements": ["Be ready to learn an insane amount of awesome stuff2"] , "learningAims":"Make REAL web applications using cutting-edge technologies and something else","courseUrl":"http://www.softprocomp.com/ding/wp-content/uploads/2015/07/computer-training-courses.png","courseDescription": "this course discusses Web development sites that are dynamic, data driven, and interactive"  },
                {"_id": "345", "instructorId": "234",   "courseName":"cs3456", "requirements":["Be ready to learn an insane amount of awesome stuff3"] , "learningAims":"Make REAL web applications using cutting-edge technologies and more and more", "courseUrl":"http://www.softprocomp.com/ding/wp-content/uploads/2015/07/computer-training-courses.png","courseDescription": "that course discusses Web development sites that are dynamic, data driven, and interactive" },
                {"_id": "456", "instructorId": "234",   "courseName":"cs6789", "requirements":["Be ready to learn an insane amount of awesome stuff4"] ,"learningAims":"Make REAL web applications using cutting-edge technologies,and coding and make money" ,"courseUrl":"http://www.softprocomp.com/ding/wp-content/uploads/2015/07/computer-training-courses.png", "courseDescription": "this course discusses Web development sites." }
            ];



        var api = {
            "updateCourse": updateCourse,
            "deleteCourse": deleteCourse,
            "getAllCourses": getAllCourses,
            "createNewCourse":createNewCourse,
            "getlearningAims" :getlearningAims,
            "getrequirements" :getrequirements,
            "findCourseByCourseId": findCourseByCourseId

        };

        return api;

        function getrequirements(){
            return courses;
        }

        function getAllCourses(){
            return courses;
        }

        function getlearningAims(){
            return courses;
        }



        function createNewCourse(course) {
            newCourse = {};
            newCourse._id = course.id;
            newCourse.courseName = course.name;
            newCourse.courseDescription = course.description;
            courses.push(newCourse);
        }



        function updateCourse(courseId) {
            for (var u in courses) {
            if(courses[u]._id === courseId) {
                courses[u] = self.course;
                return true;
                }
             }
            return false;
         }


            function deleteCourse(courseId) {

            var course = courses.find(function (course) {
                 return course._id === courseId;
             });
             var index = courses.indexOf(course);
                courses.splice(index, 1);

        }

        function findCourseByInstructorId(instructorId) {
            var results=[];
            for( var c in courses){
                if(courses[c].instructorId===instructorId){
                    results.push(courses[c]);
                }
            }
            return results;
        }

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
    }
})();
