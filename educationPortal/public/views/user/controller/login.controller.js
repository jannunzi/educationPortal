(function () {
    "use strict";
    angular
        .module('EducationPortal')
        .controller('LoginController', LoginController);

    function LoginController(UserService,$location,$rootScope) {

        var vm = this;
        vm.login = login;
        function init() {

        }

        init();

        function login(user) {
            // var found = userService.findUserByCredentials(username, password);
            UserService
                .login(user)
                .then(function (found) {
                    if(found !== null) {
                        console.log("Controller success");
                        $location.url('/profile');
                    } else {
                        vm.message = "sorry, " + username + " not found. please try again!";
                    }
                });
        }
    }
})();