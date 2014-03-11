'use strict';

/* Controllers */
console.log("loading controller...");


angular.module('myApp.controllers', ['ngResource','blogServices']).

    controller('BlogCtrl', function ($scope, BlogList) {
        console.log("loading blog controller...");
        $scope.feeds = BlogList.get();
        $scope.$on('FeedList', function (event, data) {
            $scope.feeds = data;
        });
    });


