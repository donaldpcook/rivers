'use strict';

describe('Service: AccountService', function() {
	var q, deferred, TestAccountService, timeout, firebaseSimpleLogin, promiseResult, scope;
	var testEmail = 'foo';
	var testPassword = 'bar';
	var testUID = 'hello';
	var testError = 'error';

	var firebasefns = {
		$login: function() {
			deferred = q.defer();

			if (promiseResult) {
				deferred.resolve({email: testEmail, uid: testUID});
			} else {
				deferred.reject(testError);
			}

			return deferred.promise;
		},

		$createUser: function() {
			deferred = q.defer();

			if (promiseResult) {
				deferred.resolve({email: testEmail, uid: testUID});
			} else {
				deferred.reject(testError);
			}

			return deferred.promise;
		}
	};

	var mockFirebaseSimpleLogin = function() {
		return firebasefns;
	};
	

	beforeEach(module('riversApp'));

	beforeEach(module(function($provide) {
		$provide.value('$firebaseSimpleLogin', mockFirebaseSimpleLogin);
	}));

	beforeEach(inject(function($q, $timeout, $firebaseSimpleLogin, AccountService, $rootScope) {
		firebaseSimpleLogin = $firebaseSimpleLogin;
		q = $q;
		timeout = $timeout;
		TestAccountService = AccountService;
		scope = $rootScope;
	}));

	describe('Login', function() {
		it('should call $login', function() {
			spyOn(firebasefns, '$login').andCallThrough();

			TestAccountService.login('hello', 'world');
			expect(firebasefns.$login).toHaveBeenCalled();
		});

		describe('Successful User', function() {
			var result;
			beforeEach(function() {
				promiseResult = true;

				TestAccountService.login(testEmail, testPassword).then(function(user) {
					result = user;
				});

				scope.$apply();
			});

			it('should send the user info on successfully resolved promise', function() {
				expect(result.email).toEqual(testEmail);
			});

			it('should save a user if login passes', function() {
				expect(TestAccountService.getUser().email).toEqual(testEmail);
			});
		});

		describe('Unsuccessful User', function() {
			var result;

			beforeEach(function() {
				promiseResult = false;

				TestAccountService.login(testEmail, testPassword).then(function() {
				}, function(error) {
					result = error;
				});

				scope.$apply();
			});

			it('should send an error if login fails', function() {
				expect(result).toEqual(testError);
			});

			it('should not have a user saved if login fails', function() {
				expect(TestAccountService.getUser()).toBeUndefined();
			});
		});
	});

	describe('Signup', function() {
		it('should call $createUser', function() {
			spyOn(firebasefns, '$createUser').andCallThrough();

			TestAccountService.signup('hello', 'world');
			expect(firebasefns.$createUser).toHaveBeenCalled();
		});

		describe('Successful User', function() {
			var result;
			beforeEach(function() {
				promiseResult = true;

				TestAccountService.signup(testEmail, testPassword).then(function(user) {
					result = user;
				});

				scope.$apply();
			});

			it('should send the user info on successfully resolved promise', function() {
				expect(result.email).toEqual(testEmail);
			});

			it('should save a user if createUser passes', function() {
				expect(TestAccountService.getUser().email).toEqual(testEmail);
			});
		});

		describe('Unsuccessful User', function() {
			var result;

			beforeEach(function() {
				promiseResult = false;

				TestAccountService.signup(testEmail, testPassword).then(function() {
				}, function(error) {
					result = error;
				});

				scope.$apply();
			});

			it('should send an error if createUser fails', function() {
				expect(result).toEqual(testError);
			});

			it('should not have a user saved if createUser fails', function() {
				expect(TestAccountService.getUser()).toBeUndefined();
			});
		});
	});

});
