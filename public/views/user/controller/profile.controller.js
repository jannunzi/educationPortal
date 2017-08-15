(function(){
    "use strict";
    angular.module("EducationPortal")
        .controller("ProfileController",ProfileController);


    function ProfileController(UserService,$rootScope){

        var currentUser= $rootScope.currentUser;
        var vm=this;
        vm.message= null;
        vm.username=currentUser.username;
        vm.password=currentUser.password;
        vm.firstname=currentUser.firstname;
        vm.lastname=currentUser.lastname;
        vm.email=currentUser.email;
        vm.update=update;

        function init(){

        }
        init;

        function update(username,password,firstname,lastname,email){
            var newDetails= {"username" : username, "firstname": firstname,
                "lastname":lastname , "email" :email, "password" :password};

            UserService.updateUser(newDetails)
                .then(
                    function(response){
                        $rootScope.currentUser=response.data;
                        vm.message="Profile Update";
                    },
                    function(err){
                        vm.message="Couldn't update the profile";
                    });
        }
    }
})();
