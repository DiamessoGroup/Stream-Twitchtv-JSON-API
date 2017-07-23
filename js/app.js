'use strict';

var app = angular.module('Application', []);

app.controller('myCtrl', function ($scope, $http) {
    $scope.streamUsers = ["cayinator", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404", "peroniogh", "nl_kripp"];

    $scope.clientId = "88gfww5vpzqtimas9jhiz8gkt1zkr8";

    /* $http.get(`https://api.twitch.tv/kraken/streams/${$scope.streamUsers[1]}?client_id=${$scope.clientId}`)
        .then(function (response) {
            $scope.streamName = response.data.stream.channel.display_name;
            $scope.streamUrl = response.data.stream.channel.url;
            $scope.streamViewers = response.data.stream.viewers;
            $scope.streamViews = response.data.stream.channel.views;
            $scope.streamFollowers = response.data.stream.channel.followers;
            $scope.streamLanguage = response.data.stream.channel.language;
            $scope.streamAddInfo = response.data.stream.game;
            $scope.streamLogo = response.data.stream.channel.logo;
        }); */

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
                    streamStatus: response.data.stream.channel.status
                }

                if ($scope.User.stream !== null) {
                    $scope.Users.push($scope.User);
                } else {
                    $scope.Users.push($scope.streamUsers[i]);
                }
            });
    }
    console.log($scope.Users);

});