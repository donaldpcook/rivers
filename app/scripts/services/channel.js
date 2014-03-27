'use strict';

app.factory('Channel', function ($firebase, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL + 'channels');
	var channels = $firebase(ref);

	var Channel = {
		all: channels,
		create: function(channel) {
			return channels.$add(channel);
		},
		find: function(channelId) {
			return channels.$child(channelId);
		},
		delete: function(channelId) {
			return channels.$remove(channelId);
		}
	};

	return Channel;
});