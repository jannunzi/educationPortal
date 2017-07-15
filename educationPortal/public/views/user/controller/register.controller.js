(function () {
    "use strict";
    angular.module("EducationPortal")
        .controller("RegisterController", RegisterController);

    function RegisterController(UserService,$location,$rootScope) {

        var vm = this;
        vm.registerUser = registerUser;

        function init() {

        }

        init();

        function registerUser(user) {
            if (user == null) {
                vm.error = "Please fill in the required details";
                return;
            }

            if (user.username == null) {
                vm.error = "Please enter a valid username";
                return;
            }

            if (user.password1 == null || user.password2 == null) {
                vm.error = "Please enter a password";
                return;
            }

            if (user.password1 != user.password2) {
                vm.error = "Passwords do not match";
                return;
            }

            if (user.email == null) {
                vm.error = "Enter an emailID";
                return;
            }

            UserService.register(user)
                .then(function (user) {
                        if (user != null) {
                            $rootScope.currentUser = user;
                            $location.url("/profile");
                        }
                        else {
                            vm.error = "Username already exists";
                        }
                    },
                    function (error) {
                        console.log(error);
                    })
        }
    }
})();