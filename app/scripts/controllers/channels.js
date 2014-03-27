'use strict';

app.controller('ChannelCtrl', function ($scope) {
	$scope.channels = [];
	$scope.channel = {name: '', selected: false};

	$scope.addChannel = function () {
		$scope.channels.push($scope.channel);
		$scope.channel = {name: '', selected: false};
	};

	$scope.selectChannel = function (index) {
		for (var i = 0; i < $scope.channels.length; i++) {
			if (i === index) { $scope.channels[i].selected = true;} else { $scope.channels[i].selected = false;}
		}
	};

	$scope.deleteChannel = function (index) {
		$scope.channels.splice(index,1);
	};
});