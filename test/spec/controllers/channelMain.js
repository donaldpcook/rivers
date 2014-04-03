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

	beforeEach(inject(function($rootScope, $controller, $routeParams, objectTypes) {
		scope = $rootScope.$new();
		scope.channel = {};
		TestChannelController = $controller('ChannelController', {
			$scope: scope,
			$routeParams: {channelId: 'foo'},
			ChannelService: mockChannelService,
			objectTypes: objectTypes
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
		expect(scope.channel.objects.length).toBe(1);
	});

	it('should call update on the channel service when addEvent is called', function() {
		spyOn(mockChannelService, 'update').andCallThrough();
		scope.event = {text: 'testTitle'};
		scope.addEvent();
		expect(mockChannelService.update).toHaveBeenCalled();
		expect(scope.channel.objects.length).toBe(1);
	});

	it('should call update on the channel service when addTask is called', function() {
		spyOn(mockChannelService, 'update').andCallThrough();
		scope.task = {text: 'task'};
		scope.addTask();
		expect(mockChannelService.update).toHaveBeenCalled();
		expect(scope.channel.objects.length).toBe(1);
	});
});