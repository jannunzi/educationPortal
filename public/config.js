(function() {
    "use strict";
    angular.module("EducationPortal")
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider

            .when("/home", {
                templateUrl: "views/home/home.client.html"
            })

            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller:"RegisterController",
                controllerAs:"model"
            })

            .when("/profile", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller:"ProfileController",
                controllerAs:"model"
            })

            .when("/login", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller:"LoginController",
                controllerAs:"model"
            })

            // .otherwise({
            //     redirectTo: "/home"
            // })
            .when("/course", {
                template:"<h1>List of Courses</h1> <a href='#/course/123'>Some Course</a>. <a href='#/course/new'>Add New Course</a>. <a href='#/course'>All Courses</a>. <a href='#/course'>My Courses</a>"
            })
            .when("/course/new", {
                template:"<h1>Create new course</h1> <a href='#/course'>Save</a>"
            })
            .when("/course/:courseId", {
                template:"<h1>Edit Course</h1> <a href='#/course'>Save</a>. <a href='#/course'>Delete</a>"
            })
            .when('/instructor/:instructorId/course/course-landing', {
                templateUrl: "views/course/course-edit/templates/landing.view.client.html",
                controller:"landingController",
                controllerAs:"model"
            })
            .when("/instructor/:instructorId/course/:courseId/general", {
                templateUrl: "views/course/course-edit/templates/general.view.client.html",
                controller:"generalController",
                controllerAs:"model"
            })
            .when("/instructor/:instructorId/course/:courseId/learningaims", {
                templateUrl: "views/course/course-edit/templates/learningaims-list.view.client.html",
                controller:"learningAimsController",
                controllerAs:"model"
            })
            .when("/instructor/:instructorId/course/:courseId/requirements", {
                templateUrl: "views/course/course-edit/templates/requirements-list.view.client.html",
                controller:"requirementsController",
                controllerAs:"model"
             })
          
            .when("/instructor/:instructorId/course/:courseId/curriculum", {
                templateUrl: "views/course/course-edit/template/curriculum.instructor.view.client.html",
                controller:"courseController",
                controllerAs:"model"
            })
            .when("/instructor/:instructorId/course/:courseId/profile", {
                templateUrl: "views/course/course-edit/template/profile.instructor.view.client.html",
                controller:"instructorController",
                controllerAs:"model"
            })
            .when("/instructor/:instructorId/course/:courseId/reviews", {
                templateUrl: "views/course/course-edit/template/reviews.instructor.view.client.html",
                controller:"reviewsController",
                controllerAs:"model"
            })

            .when("/instructor/:instructorId/course/new", {
                templateUrl: "views/course/course-edit/templates/course-new.view.client.html",
                controller:"createNewCourseController",
                controllerAs:"model"
            })
      
            .otherwise({
                redirectTo: "/home"
            })

    }
})();