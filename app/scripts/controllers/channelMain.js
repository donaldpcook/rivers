'use strict';

app.controller('ChannelController', function ($scope, $routeParams, ChannelService) {
	$scope.channel = ChannelService.find($routeParams.channelId);

	$scope.addMessage = function () {
		var newMessage = $scope.message;
		newMessage.text = newMessage.text.trim();
		if (newMessage.text.length) {
			newMessage.createdAt = new Date().getTime();
			if(!$scope.channel.messages) {
				$scope.channel.messages = [];
			}
			$scope.channel.messages.push(newMessage);
			ChannelService.update($routeParams.channelId, $scope.channel);
		
			$scope.message.text = '';
		}
	};

	$scope.addEvent = function () {
		var newEvent = $scope.event;
		newEvent.title = newEvent.title.trim();
		if (newEvent.title.length){
			newEvent.createdAt = new Date().getTime();
			if(!$scope.channel.events) {
				$scope.channel.events = [];
			}
			$scope.channel.events.push(newEvent);
			ChannelService.update($routeParams.channelId, $scope.channel);
		}
		
		$scope.event.title = '';
		$scope.event.date = '';
	};
	
	/*
	Date Picker behaviors and configuration
	*/
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