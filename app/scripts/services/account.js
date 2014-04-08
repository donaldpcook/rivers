'use strict';

app.factory('AccountService', function ($rootScope, $q, $firebaseSimpleLogin, configuration) {
	var ref = new Firebase(configuration.FIREBASE_URL);
	var user;

	var auth = $firebaseSimpleLogin(ref);

	var login = function(email, password) {
		var deferred = $q.defer();

		auth.$login('password', {
			email: email,
			password: password,
			rememberMe: true
		}).then(function(userOb) {
			user = userOb;
			deferred.resolve(user);
		}, function(error) {
			deferred.reject(error);
		});

		return deferred.promise;
	};

	var signup = function(email, password) {
		var deferred = $q.defer();

		auth.$createUser(email, password).then(function(userOb) {
			user = userOb;
			deferred.resolve(user);
		}, function(error) {
			deferred.reject(error);
		});

		return deferred.promise;
	};

	var getUser = function() {
		return user;
	};

	var AccountService = {
		login: login,
		signup: signup,
		getUser: getUser
	};

	return AccountService;
});
