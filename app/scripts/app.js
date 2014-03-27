/* global app:true */

'use strict';

var app = angular.module('rgaviewApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config( function ($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardController'
    })
    .when('/:channelName', {
      templateUrl: 'views/channel.html',
      controller: 'ChannelController'
    })
    .otherwise({
      redirectTo: '/'
    });
});