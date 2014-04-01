'use strict';

app.controller('ChannelNavController', function ($scope, $routeParams, ChannelService) {
	$scope.channels = ChannelService.all;
	$scope.selectedChannel = $routeParams.index;
	$scope.channel = {name: ''};

	$scope.addChannel = function () {
		var newChannel = $scope.channel;
		newChannel.name = newChannel.name.trim();
		if (newChannel.name.length) {
			ChannelService.create(newChannel).then(function() {
				$scope.channel = {name: ''};
			});
		}
	};

	$scope.deleteChannel = function (channelId) {
		ChannelService.delete(channelId);
	};
});