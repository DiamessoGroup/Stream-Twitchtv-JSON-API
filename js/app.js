var app = angular.module('Application', []);

app.controller('myCtrl', function ($scope, $http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $http({
            method: "json-p",
            url: "https://api.twitch.tv/kraken/streams/Cayinator?client_id=88gfww5vpzqtimas9jhiz8gkt1zkr8"
        })
        .then(function (response) {
            $scope.stream = response.data;
            console.log($scope.stream);
        });
});