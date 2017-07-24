/**
 * Created by wuyan on 7/23/17.
 */
/**
 * Created by wuyan on 7/11/17.
 */
(function () {
    angular.module('EducationPortal')
        .factory('courseService', courseService);

    function courseService() {
        var curriculum=
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
            {courseId: "123", instructorId:"123", instructorName:"Alice", instructorDescription:"Great teacher!!!", reviews:'url'},
            {courseId: "123", instructorId:"123", instructorName:"Alice", instructorDescription:"Great teacher2!!!", reviews:'url'},
            {courseId: "123", instructorId:"123", instructorName:"Alice", instructorDescription:"Great teacher3!!!", reviews:'url'}
        ];

        var api={
            findCourseByInstructorId : findCourseByInstructorId,
            findCourseByCourseId : findCourseByCourseId,
            findCurriculumByCourseId: findCurriculumByCourseId,
            addCurriculumItem: addCurriculumItem
        };

        return api;

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

        function addCurriculumItem(_curriculum) {
            _curriculum._id = (new Date()).getTime()+"";
            curriculum.push(_curriculum);
            return curriculum;
        }
        function deleteCurriculumItem() {

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