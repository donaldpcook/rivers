/* global app:true */

'use strict';

var app = angular.module('riversApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
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

app.constant('FIREBASE_URL', 'https://sizzling-fire-9212.firebaseio.com/');