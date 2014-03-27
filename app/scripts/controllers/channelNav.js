'use strict';

app.controller('ChannelNavController', function ($scope, $routeParams, Channel) {
	$scope.channels = Channel.all;
	$scope.channel = {name: ''};
	$scope.selectedChannel = $routeParams.index;

	$scope.addChannel = function () {
		Channel.create($scope.channel).then(function() {
			$scope.channel = {name: ''};
		});
	};

	$scope.deleteChannel = function (channelId) {
		Channel.delete(channelId);
	};
});