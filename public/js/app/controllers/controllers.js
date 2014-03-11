'use strict';

/* Controllers */
console.log("loading controller...");


angular.module('myApp.controllers', ['ngResource','blogServices']).

    controller('BlogCtrl', function ($scope, BlogList) {
        $scope.feeds = BlogList.get();
    });


