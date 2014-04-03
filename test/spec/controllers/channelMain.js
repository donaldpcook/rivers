'use strict';


describe('Controller: ChannelController', function() {

	var TestChannelController, scope, mockChannelService;
	beforeEach(module('riversApp'));

	beforeEach(function() {
		mockChannelService = {
			find: function() {
				return true;
			},
			update: function() {
				return true;
			}
		};

	});

	beforeEach(inject(function($rootScope, $controller, $routeParams) {
		scope = $rootScope.$new();
		scope.channel = {};
		TestChannelController = $controller('ChannelController', {
			$scope: scope,
			$routeParams: {channelId: 'foo'},
			ChannelService: mockChannelService
		});

	}));

	beforeEach(function() {
		scope.channel = {};
	});

	it('should call update on the channel service when addMessage is called', function() {
		spyOn(mockChannelService, 'update').andCallThrough();
		scope.message = {text: 'testMessage'};
		scope.addMessage();
		expect(mockChannelService.update).toHaveBeenCalled();
		expect(scope.channel.messages.length).toBe(1);
	});

	it('should call update on the channel service when addEvent is called', function() {
		spyOn(mockChannelService, 'update').andCallThrough();
		scope.event = {title: 'testTitle'};
		scope.addEvent();
		expect(mockChannelService.update).toHaveBeenCalled();
		expect(scope.channel.events.length).toBe(1);
	});


});