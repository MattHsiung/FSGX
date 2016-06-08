import angular from 'angular';
import satellizer from 'satellizer';

import AuthFactory from './auth.factory';

let authModule = angular.module('app.auth', [
	'satellizer'
])
.factory('AuthFactory', AuthFactory)

.config(($authProvider, $httpProvider) => {
	"ngInject";

	$authProvider.facebook({
      clientId: 'Facebook App ID'
    });

    $authProvider.google({
      clientId: '666549905491-8eftphb9rc69s9u2uc591b0dm0ig5k7m.apps.googleusercontent.com'
    });

    $authProvider.github({
      clientId: 'GitHub Client ID'
    });

    $authProvider.linkedin({
      clientId: 'LinkedIn Client ID'
    });

    $authProvider.instagram({
      clientId: 'Instagram Client ID'
    });

    $authProvider.yahoo({
      clientId: 'Yahoo Client ID / Consumer Key'
    });

    $authProvider.live({
      clientId: 'Microsoft Client ID'
    });

    $authProvider.twitch({
      clientId: 'Twitch Client ID'
    });

    $authProvider.bitbucket({
      clientId: 'Bitbucket Client ID'
    });

    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      clientId: 'Foursquare Client ID',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });
});

export default authModule;