'use strict';

app.controller('ChannelController', function ($scope, $routeParams, ChannelService) {
	$scope.channel = ChannelService.find($routeParams.channelId);

	$scope.addMessage = function () {
		$scope.message.createdAt = new Date().getTime();
		
		//TODO: properly instatiate model object. This doesn't seem right.
		if ($scope.channel.messages === undefined) {
			$scope.channel.messages = [];
		}
		$scope.channel.messages.push($scope.message);
		ChannelService.update($routeParams.channelId, $scope.channel);
		
		//TODO: Properly re-initialize UI? This doesn't seem right.
		$scope.message.text = '';
	};

	$scope.addEvent = function () {
		$scope.event.createdAt = new Date().getTime();
		if ($scope.channel.events === undefined) {
			$scope.channel.events = [];
		}
		$scope.channel.events.push($scope.event);
		ChannelService.update($routeParams.channelId, $scope.channel);
		//TODO: Properly re-initialize UI? This doesn't seem right.
		$scope.event.title = '';
		$sceop.event.date = '';


	};
	
	$scope.today = function() {
		$scope.dt = new Date();
	};
	$scope.today();

	$scope.clear = function () {
		$scope.dt = null;
	};

	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.opened = true;
	};
	$scope.minDate = new Date();
	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
	$scope.format = $scope.formats[0];
});