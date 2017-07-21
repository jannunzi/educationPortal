(function(){

    angular
        .module("EducationPortal")
        .factory("UserService",UserService);

    function UserService($rootScope,$http){

        var model = {
            updateUser : updateUser,
            register: register,
            login : login
        };
        return model;

        function register(user){
            return $http.post("/api/register", user);
        }

        function updateUser(user){
            return $http.put("/api/updateUser",user);
        }

        function login(user) {
            var url = "/api/login";
            console.log("service");
            var credentials = {
                username: user.username,
                password: user.password
            };
            return $http.post(url,credentials)
                .then(function (response) {
                    return response.data;
                });

        }
    }
})();

