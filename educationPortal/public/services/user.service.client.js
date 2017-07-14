(function(){
    angular
        .module('educationPortal')
        .factory('userService', userService);

    function userService($http) {
        var api = {
            login: login
            // logout: logout,
            // loggedin: loggedin
        };
        return api;

        // function loggedin() {
        //     var url = "/api/assignment/graduate/loggedin";
        //     return $http.get(url)
        //         .then(function (response) {
        //             return response.data;
        //         });
        // }
        //
        // function logout() {
        //     var url = "/api/assignment/graduate/logout";
        //     return $http.post(url)
        //         .then(function (response) {
        //             return response.data;
        //         });
        // }

        function login(username, password) {
            var url = "/api/assignment/graduate/login";
            var credentials = {
                username: username,
                password: password
            };
            return $http.post(url, credentials)
                .then(function (response) {
                    return response.data;
                });
        }

    }
})();