'use strict';

app.controller('ChannelController', function ($scope, $routeParams, Channel) {
	$scope.channel = Channel.find($routeParams.channelId);

	$scope.addMessage = function () {
		$scope.message.createdAt = new Date().getTime();
		
		//TODO: properly instatiate model object. This doesn't seem right.
		if ($scope.channel.messages === undefined) {
			$scope.channel.messages = [];
		}
		$scope.channel.messages.push($scope.message);
		Channel.update($routeParams.channelId, $scope.channel);
		
		//TODO: Properly re-initialize UI? This doesn't seem right.
		$scope.message.text = '';
	};

	$scope.addEvent = function () {
		$scope.event.createdAt = new Date().getTime();
		if ($scope.channel.events === undefined) {
			$scope.channel.events = [];
		}
		$scope.channel.events.push($scope.event);
		Channel.update($routeParams.channelId, $scope.channel);

	}
});