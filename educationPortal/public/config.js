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

            .otherwise({
                redirectTo: "/home"
            })
    }
})();