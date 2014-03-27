'use strict';

app.controller('ChannelController', function ($scope, $routeParams) {
	$scope.channelName = $routeParams.channelName;

});