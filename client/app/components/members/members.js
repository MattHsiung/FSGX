import angular from 'angular';
import uiRouter from 'angular-ui-router';

let membersModule = angular.module('members', [
  uiRouter
])

.config(($stateProvider) => {
	"ngInject";
    $stateProvider
    	.state('members', {
        	url: '/members-area',
        	template: '<h1>members-only area</h1>',
	        requireAuth: true
    	});
});

export default membersModule;

