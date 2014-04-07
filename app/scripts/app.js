/* global app:true */

'use strict';

var app = angular.module('riversApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'services.config',
  'ui.bootstrap'
]);

app.config( function ($routeProvider) {
  $routeProvider
    //.when('/',{
      //templateUrl: 'views/dashboard.html',
      //controller: 'DashboardController'
    //})
    .when('/login', {
      templateUrl: 'views/account/login.html',
      controller: 'AccountController'
    })
    .when('/signup', {
      templateUrl: 'views/account/signup.html',
      controller: 'AccountController'
    })
    .when('/:channelId', {
      templateUrl: 'views/channel.html',
      controller: 'ChannelController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.constant('objectTypes', {
  MESSAGE: 1,
  EVENT: 2,
  TASK: 3
});
