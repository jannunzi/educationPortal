
(function(){

    angular
        .module("EducationPortal")
        .factory("SectionService",SectionService);

    function SectionService($rootScope,$http){

        var sections = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];


        var model = {
            addSection : addSection
        };
        return model;

        function addSection(user){
            return $http.post("/api/register", user);
        }
    }
})();

