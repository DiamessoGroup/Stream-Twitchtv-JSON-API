'use strict';

var app = angular.module('Application', []);

app.controller('myCtrl', function ($scope, $http) {
    $scope.streamUsers = ["cayinator", "ESL_SC2", "OgamingSC2", "peroniogh", "nl_kripp", "cretetion", "brunofin", "comster404"];

    $scope.streamUsersOff = ["freecodecamp", "habathcx", "storbeck", "RobotCaleb", "noobs2ninjas"];

    $scope.filters = {};

    $scope.clientId = "88gfww5vpzqtimas9jhiz8gkt1zkr8";

    for (var i = 0; i < $scope.streamUsers.length; i++) {
        $scope.Users = [];
        $http.get(`https://api.twitch.tv/kraken/channels/${$scope.streamUsers[i]}?client_id=${$scope.clientId}`)
            .then(function Success(response) {
                    if (response.data.stream !== null || undefined) {
                        $scope.User = {
                            streamName: response.data.display_name,
                            streamUrl: response.data.url,
                            streamViewers: response.data.viewers,
                            streamViews: response.data.views,
                            streamFollowers: response.data.followers,
                            streamLanguage: response.data.language,
                            streamGame: response.data.game,
                            streamLogo: response.data.logo,
                            streamStatus: response.data.status,
                            streamOnOff: "Online"
                        };
                        $scope.Users.push($scope.User);
                    }
                },
                function Error(response ) {
                    $scope.statusText = response.statusText;
                    $scope.statusCode = response.status;
                    $scope.User = {
                        streamStatus: response.data.message,
                        //streamName: "$scope.streamUsers[i]",
                        // streamUrl: ,
                        // streamViewers: "N/A",
                        // streamViews: "N/A",
                        // streamFollowers: "N/A",
                        // streamLanguage: "N/A",
                        // streamGame: "N/A",
                        // streamLogo: "N/A",
                        // streamOnOff: "N/A",
                    }
                    // console.log($scope.statusText);
                    // console.log($scope.statusCode);
                    // console.log(3);
                    $scope.Users.push($scope.User);
                    //console.log($scope.User);
                });

        // $http.get(`https://wind-bow.glitch.me/twitch-api/channels/${$scope.streamUsersOff[i]}`)
        //     .then(function (response) {
        //             if (response.data.display_name !== '') {
        //                 $scope.User = {
        //                     streamName: response.data.display_name,
        //                     streamUrl: response.data.url,
        //                     streamViewers: "N/A",
        //                     streamViews: "N/A",
        //                     streamFollowers: "N/A",
        //                     streamLanguage: "N/A",
        //                     streamGame: "N/A",
        //                     streamLogo: response.data.logo,
        //                     streamOnOff: "Offline",
        //                     streamStatus: response.data.display_name
        //                 }

        //                 $scope.Users.push($scope.User);
        //                 console.log($scope.User);
        //             }
        //         },
        //         function Error(response) {
        //             $scope.statusText = response.statusText;
        //             $scope.statusCode = response.status;
        //              console.log($scope.statusText);
        //              console.log($scope.statusCode);
        //              console.log(4);
        //         });
    }
    //console.log($scope.Users);
});