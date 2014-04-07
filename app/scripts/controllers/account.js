'use strict';

app.controller('AccountController', function ($scope, $rootScope, $location, AccountService) {
	$scope.login = function() {
		AccountService.login($scope.userInput.email, $scope.userInput.password);
	};

	$scope.signup = function() {
		AccountService.signup($scope.user.email, $scope.user.password).then(function(user) {
			$location.path('/');
		});
	};

	$rootScope.$on('user:changed', function(evt, error, user) {
		if (error) {
			$scope.user = null;
			$scope.error = error;
		} else if (user) {
			$scope.error = null;
			$scope.user = user;
		} else {
			$scope.error = null;
			$scope.user = null;
		}

		$scope.$apply();
	});
});
