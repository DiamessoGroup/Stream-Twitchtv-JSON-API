'use strict';

var app = angular.module('Application', []);

app.controller('myCtrl', function ($scope, $http) {
    $scope.streamUsers = ["cayinator", "ESL_SC2", "OgamingSC2", "peroniogh", "nl_kripp"];

    $scope.streamUsersOff = ["cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];

    $scope.filters = {};

    $scope.clientId = "88gfww5vpzqtimas9jhiz8gkt1zkr8";

    for (var i = 0; i < $scope.streamUsers.length; i++) {
        $scope.Users = [];
        $http.get(`https://api.twitch.tv/kraken/streams/${$scope.streamUsers[i]}?client_id=${$scope.clientId}`)
            .then(function (response) {
                $scope.User = {
                    stream: response.data.stream,
                    streamName: response.data.stream.channel.display_name,
                    streamUrl: response.data.stream.channel.url,
                    streamViewers: response.data.stream.viewers,
                    streamViews: response.data.stream.channel.views,
                    streamFollowers: response.data.stream.channel.followers,
                    streamLanguage: response.data.stream.channel.language,
                    streamGame: response.data.stream.game,
                    streamLogo: response.data.stream.channel.logo,
                    streamStatus: response.data.stream.channel.status,
                    streamOnOff: "Online"
                }

                $scope.Users.push($scope.User);
                console.log($scope.User);
            });

        $http.get(`https://wind-bow.glitch.me/twitch-api/users/${$scope.streamUsersOff[i]}`)
            .then(function (response) {
                $scope.User = {
                    stream: "N/A",
                    streamName: response.data.display_name,
                    streamUrl: "N/A",
                    streamViewers: "N/A",
                    streamViews: "N/A",
                    streamFollowers: "N/A",
                    streamLanguage: "N/A",
                    streamGame: "N/A",
                    streamLogo: response.data.logo,
                    streamOnOff: "Offline",
                    streamStatus: response.data.display_name
                }

                $scope.Users.push($scope.User);
                console.log($scope.User);
            });
    }
    console.log($scope.Users);
});