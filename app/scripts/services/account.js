'use strict';

app.factory('AccountService', function ($rootScope, $q, configuration) {
	var ref = new Firebase(configuration.FIREBASE_URL);
	var user;

	// triggered anytime login state is changed
	var auth = new FirebaseSimpleLogin(ref, function(error, user) {
		user = user;
		$rootScope.$broadcast('user:changed', error, user);
	});

	var login = function(email, password) {
		auth.login('password', {
			email: email,
			password: password
		});
	};

	var signup = function(email, password) {
		var deferred = $q.defer();

		auth.createUser(email, password, function(error, user) {
			if (error) {
				deferred.reject(error);
			} else {
				deferred.resolve(user);
			}
		});

		return deferred.promise;
	};

	var AccountService = {
		login: login,
		signup: signup
	};

	return AccountService;
});
