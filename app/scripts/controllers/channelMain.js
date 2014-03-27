'use strict';

app.controller('ChannelController', function ($scope, $routeParams, Channel) {
	$scope.channel = Channel.find($routeParams.channelId);

	$scope.addMessage = function () {
		console.log('adding message');
		console.log($scope.channel);
		$scope.channel.messages.push($scope.message);
		Channel.update($routeParams.channelId, $scope.channel);
		$scope.message.text = '';
	};
});