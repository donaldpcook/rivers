'use strict';

app.controller('ChannelNavController', function ($scope, $routeParams) {
	$scope.channels = [];
	$scope.channel = {name: ''};
	$scope.selectedChannel = $routeParams.index;

	$scope.addChannel = function () {
		$scope.channels.push($scope.channel);
		$scope.channel = {name: ''};
	};
	$scope.deleteChannel = function (index) {
		$scope.channels.splice(index,1);
	};
});