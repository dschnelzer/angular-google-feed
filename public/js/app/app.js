'use strict';

var myApp = angular.module('myApp', [
    'myApp.controllers',
    'ngRoute'
]);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '/blog.html',
            controller: 'BlogCtrl'
        }).
        otherwise({
            template: '<h2>otherwise template</h2>',
            redirectTo: '/'
        });

    $locationProvider.html5Mode(false);
}]);