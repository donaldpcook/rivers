'use strict';

describe('Controller: ChannelNavController', function() {

	var TestChannelNavController, mockChannelService, scope, q, deferred, testChannelName;
	testChannelName = 'foo';

	beforeEach(module('riversApp'));

	beforeEach(inject());
	
	beforeEach(function() {
		mockChannelService = {
			create: function() {
				deferred = q.defer();
				return deferred.promise;
			}
		};
	});

	beforeEach(inject(function($rootScope, $controller, $q) {
		scope = $rootScope.$new();
		q = $q;
		TestChannelNavController = $controller('ChannelNavController', {
			$scope: scope,
			$routeParams: {},
			ChannelService: mockChannelService
		});

	}));

	it('should call create on the channel service when addChannel is called', function() {
		spyOn(mockChannelService,'create').andCallThrough();
		scope.channel = {name: testChannelName};
		scope.addChannel();
		deferred.resolve();
		expect(mockChannelService.create).toHaveBeenCalled();
	});

});