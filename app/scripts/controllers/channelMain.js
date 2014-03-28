'use strict';

app.controller('ChannelController', function ($scope, $routeParams, Channel) {
	$scope.channel = Channel.find($routeParams.channelId);

	$scope.addMessage = function () {
		$scope.message.createdAt = new Date().getTime();
		$scope.channel.messages.push($scope.message);
		Channel.update($routeParams.channelId, $scope.channel);
		$scope.message.text = '';
	};
});