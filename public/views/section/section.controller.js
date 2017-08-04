(function(){
    "use strict";
    angular.module("EducationPortal")
        .controller("SectionController",SectionController);


    function SectionController(UserService,$rootScope) {


        var vm = this;
        vm.allSections = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        vm.login = login;
        function init() {

            console.log("allsections", vm.allSections);
        }
    }
})();
