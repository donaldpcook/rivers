'use strict';

app.controller('ChannelController', function ($scope, $routeParams, ChannelService, objectTypes) {
	$scope.channel = ChannelService.find($routeParams.channelId);

	$scope.addMessage = function () {
		var newChannelObject = $scope.message;
		newChannelObject.text = newChannelObject.text.trim();
		if (newChannelObject.text.length) {
			addObjectToChannel(newChannelObject, objectTypes.MESSAGE);
			$scope.message.text = '';
		}
	};

	$scope.addEvent = function () {
		var newChannelObject = $scope.event;
		newChannelObject.text = newChannelObject.text.trim();
		
		if (newChannelObject.text.length){
			addObjectToChannel(newChannelObject, objectTypes.EVENT);
			$scope.event.title = '';
			$scope.event.date = '';
		}
	};
	
	function addObjectToChannel(newObject, type) {
		newObject.createdAt = new Date().getTime();
		newObject.type = type;
		if(!$scope.channel.objects) {
			$scope.channel.objects = [];
		}
		$scope.channel.objects.push(newObject);
		ChannelService.update($routeParams.channelId, $scope.channel);
	}

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