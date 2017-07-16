(function(){

    angular
        .module("EducationPortal")
        .factory("UserService",UserService);

    function UserService($rootScope,$http){

        var model = {
            updateUser : updateUser,
            register: register,
        };
        return model;

        function register(user){
            return $http.post("/api/register", user);
        }

        function updateUser(user){
            return $http.put("/api/updateUser",user);
        }
    }
})();

