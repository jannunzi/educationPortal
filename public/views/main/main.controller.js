(function(){
    "use strict";
    angular.module("EducationPortal")
        .controller("MainController",MainController);

    function MainController($scope, $location)
    {
        $scope.$location = $location;
        console.log("here");
    }
})();