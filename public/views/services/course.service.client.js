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

        var api={
            findCourseByInstructorId : findCourseByInstructorId,
            findCourseByCourseId : findCourseByCourseId,
            findCurriculumByCourseId: findCurriculumByCourseId,
            addCurriculumItem: addCurriculumItem,
            deleteCurriculumItem: deleteCurriculumItem,
            findInstructorById:findInstructorById,
            updateInstructorInfo: updateInstructorInfo,
            addReviews: addReviews,
            getList:getList,
            findCurriculumById: findCurriculumById
    };

        return api;
        function getList() {
            return lists;
        }

        function findCurriculumById(_id) {
            var result=[];
            for(var c in curriculum){
                if(curriculum[c]._id==_id){
                    result.push(curriculum[c]);
                }
            }
            return result;
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