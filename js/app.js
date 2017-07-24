'use strict';

var app = angular.module('Application', []);

app.controller('myCtrl', function ($scope, $http) {
    $scope.streamUsers = ["cayinator", "ESL_SC2", "OgamingSC2", "peroniogh", "nl_kripp", "cretetion", "brunofin", "comster404"];

    $scope.streamUsersOff = ["freecodecamp", "habathcx", "storbeck", "RobotCaleb", "noobs2ninjas"];

    $scope.filters = {};


    $scope.Users = [];
    $http.get("./json/data.json")
        .then(function Success(response) {
                for (var i = 0; i < response.data.length; i += 1) {
                    if (response.data[i].stream !== null && response.data[i].stream !== undefined) {
                        $scope.User = {
                            streamName: response.data[i].stream.display_name,
                            streamUrl: response.data[i].stream.url,
                            streamViewers: response.data[i].stream.viewers,
                            streamViews: response.data[i].stream.views,
                            streamFollowers: response.data[i].stream.followers,
                            streamLanguage: response.data[i].stream.language,
                            streamGame: response.data[i].stream.game,
                            streamLogo: response.data[i].stream.logo,
                            streamStatus: response.data[i].stream.status,
                            streamOnOff: "Online"
                        };
                        $scope.Users.push($scope.User);
                        //console.log($scope.User);
                    }

                    if (response.data[i].stream === null) {
                        $scope.User = {
                            streamName: response.data[i].display_name,
                            streamStatus: response.data[i].display_name,
                            streamUrl: false,
                            streamViewers: "N/A",
                            streamViews: "N/A",
                            streamFollowers: "N/A",
                            streamLanguage: "N/A",
                            streamGame: "N/A",
                            streamLogo: "./../img/generic-placeholder.jpg",
                            streamOnOff: "Offline",
                        }
                        $scope.Users.push($scope.User);
                        //console.log($scope.User);
                    }

                    if (response.data[i].stream === undefined) {
                        $scope.User = {
                            streamName: response.data[i].display_name,
                            streamStatus: response.data[i].message,
                            streamUrl: false,
                            streamOnOff: "",
                            streamLogo: "./../img/generic-placeholder.jpg"
                        }
                        $scope.Users.push($scope.User);
                        //console.log($scope.User);
                    }
                }
                //console.log(response.data);
            },
            function Error(response) {
                $scope.statusText = response.statusText;
                $scope.statusCode = response.status;
                console.log($scope.statusText);
                console.log($scope.statusCode);
                console.log(3);
                //console.log($scope.User);
            });
    //console.log($scope.Users);
});