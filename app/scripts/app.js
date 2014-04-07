/* global app:true */

'use strict';

var app = angular.module('riversApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'services.config'
]);

app.config( function ($routeProvider) {
  $routeProvider
    //.when('/',{
      //templateUrl: 'views/dashboard.html',
      //controller: 'DashboardController'
    //})
    .when('/:channelId', {
      templateUrl: 'views/channel.html',
      controller: 'ChannelController'
    })
    .when('/', {
      templateUrl: 'views/account/signup.html',
      controller: 'AccountController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
