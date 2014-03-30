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
    .when('/',{
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardController'
    })
    .when('/:channelId', {
      templateUrl: 'views/channel.html',
      controller: 'ChannelController'
    })
    .otherwise({
      redirectTo: '/'
    });
});