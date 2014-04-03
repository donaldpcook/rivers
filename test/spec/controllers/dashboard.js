'use strict';

describe('Controller: DashboardController', function() {

	var TestDashboardController, scope;
	beforeEach(module('riversApp'));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		TestDashboardController = $controller('DashboardController', {
			$scope: scope
		});

	}));

	it('should have a welcome message in the scope', function() {
		expect(scope.message).toNotBe(undefined);
		expect(scope.message).toNotBe(null);
	});

});