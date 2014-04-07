'use strict';

app.controller('AccountController', function ($scope, $rootScope, $location, AccountService) {
	$scope.user = AccountService.getUser();

	$scope.login = function() {
		AccountService.login($scope.userInput.email, $scope.userInput.password).then(function(user) {
			$scope.user = user;
		}, function(error) {
			$scope.error = error;
		});
	};

	$scope.signup = function() {
		AccountService.signup($scope.userInput.email, $scope.userInput.password).then(function() {
			// TODO: something else
			$location.path('/');
		});
	};
});
