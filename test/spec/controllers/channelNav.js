'use strict';

describe('Controller: ChannelNavController', function() {

	var TestChannelNavController, mockChannelService, scope, testChannelName;
	testChannelName = 'foo';

	beforeEach(module('riversApp'));

	beforeEach(inject());
	
	beforeEach(function() {
		angular.mock.module('ChannelService', []);
	});

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();

		TestChannelNavController = $controller('ChannelNavController', {
			$scope: scope,
			$routeParams: {}
		});

	}));

	it('should add a new Channel via the ChannelService and reset the channel in the scope', function() {
		scope.channel = {name: testChannelName};
		scope.addChannel();
		expect(mockChannelService.created).toBe(true);
		expect(mockChannelService.createdName).toBe(testChannelName);
	});

});