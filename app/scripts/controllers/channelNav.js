'use strict';

app.controller('ChannelNavController', function ($scope, $routeParams, ChannelService) {
	$scope.channels = ChannelService.all;
	$scope.channel = {name: ''};
	$scope.selectedChannel = $routeParams.index;

	$scope.addChannel = function () {
		ChannelService.create($scope.channel).then(function() {
			$scope.channel = {name: ''};
		});
	};

	$scope.deleteChannel = function (channelId) {
		ChannelService.delete(channelId);
	};
});