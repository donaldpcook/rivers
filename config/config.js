'use strict';

/*

Environment-specific configuration files are added to
config/environments as .json files using key-value pairs below.

Example:

development.json
{
	FIREBASE_URL: "yourfirebaseurl.com"
}

run grunt replace:development to build app/services/config.js

*/

angular.module('services.config', [])
  .constant('configuration', {
    FIREBASE_URL: '@@FIREBASE_URL'
  });
