'use strict';

app.factory('ChannelService', function ($firebase, configuration) {
	var ref = new Firebase(configuration.FIREBASE_URL + 'channels');
	var channels = $firebase(ref);

	var ChannelService = {
		all: channels,
		create: function(channel) {
			channel.createdAt = new Date().getTime();
			return channels.$add(channel);
		},
		find: function(channelId) {
			return channels.$child(channelId);
		},
		update: function(channelId, channel) {
			return channels.$child(channelId).$update(channel);
		},
		delete: function(channelId) {
			return channels.$remove(channelId);
		}
	};

	return ChannelService;
});