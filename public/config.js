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

            .otherwise({
                redirectTo: "/home"
            })




            .when('/instructor/:instructorId/course/course-landing', {
                templateUrl: "views/course/course-edit/templates/landing.view.client.html",
                controller:"LandingController",
                controllerAs:"model"
            })

            .when("/instructor/:instructorId/course/:courseId/general", {
                templateUrl: "views/course/course-edit/templates/general.view.client.html",
                controller:"GeneralController",
                controllerAs:"model"
            })


            .when("/instructor/:instructorId/course/:courseId/learningaims", {
                templateUrl: "views/course/course-edit/templates/learningaims-list.view.client.html",
                controller:"learingaimsController",
                controllerAs:"model"
            })



            .when("/instructor/:instructorId/course/:courseId/requirements", {
                templateUrl: "views/course/course-edit/templates/requirements-list.view.client.html",
                controller:"requirementsController",
                controllerAs:"model"
            })


















    }
})();