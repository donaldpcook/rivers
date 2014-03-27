'use strict';

app.controller('ChannelController', function ($scope, $routeParams, Channel) {
	console.log($routeParams);
	$scope.channel = Channel.find($routeParams.channelId);
});