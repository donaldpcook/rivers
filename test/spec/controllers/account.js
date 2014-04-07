'use strict';

describe('Controller: AccountController', function() {

	var TestAccountController, mockAccountService, scope, rootScope, q, deferred;
	var testAccountName = 'foo';
	var testAccountPassword = 'bar';
	var testError = 'ERROR';

	beforeEach(module('riversApp'));

	beforeEach(function() {
		mockAccountService = {
			login: function() {
				deferred = q.defer();
				return deferred.promise;
			},
			signup: function() {
				deferred = q.defer();
				return deferred.promise;
			},
			getUser: function() {
				return false;
			}
		};
	});

	beforeEach(inject(function($rootScope, $controller, $q) {
		rootScope = $rootScope;
		scope = $rootScope.$new();
		q = $q;
		TestAccountController = $controller('AccountController', {
			$scope: scope,
			$routeParams: {},
			AccountService: mockAccountService
		});
	}));

	it('should call login on the account service when login is called', function() {
		spyOn(mockAccountService,'login').andCallThrough();
		scope.userInput = {email: testAccountName, password: testAccountPassword};
		scope.login();
		expect(mockAccountService.login).toHaveBeenCalledWith(testAccountName, testAccountPassword);
	});

	it('should call signup on the account service when signup is called', function() {
		spyOn(mockAccountService,'signup').andCallThrough();
		scope.userInput = {email: testAccountName, password: testAccountPassword};
		scope.signup();
		expect(mockAccountService.signup).toHaveBeenCalledWith(testAccountName, testAccountPassword);
	});
});

