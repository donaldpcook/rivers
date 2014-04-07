'use strict';

app.controller('AccountController', function ($scope, AccountService) {
  $scope.login = function() {
    AccountService.login($scope.user.email, $scope.user.password);
  };

  $scope.signup = function() {
    AccountService.signup($scope.user.email, $scope.user.password).then(function(user) {
      debugger;
    });
  };
});
