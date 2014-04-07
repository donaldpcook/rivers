'use strict';

app.filter('orderObjectBy', function() {
	return function(input, attribute, reverse) {
		if (!angular.isObject(input)) { return input; }

		var array = [];

		for(var objectKey in input) {
			array.push(input[objectKey]);
		}

		array.sort(function(a, b){
			a = parseInt(a[attribute]);
			b = parseInt(b[attribute]);
			return a - b;
		});

		if(reverse) { array.reverse(); }

		return array;
	};
});