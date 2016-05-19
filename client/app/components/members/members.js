import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import membersComponent from './members.component';

let membersModule = angular.module('members', [
  uiRouter
])

.config(($stateProvider) => {
	"ngInject";
    $stateProvider
    	.state('membersOnly', {
        	url: '/members-area',
        	template: '<h1>members-only area</h1>',
	        data: { authenticate: true }
    	});
})

// .component('members', membersComponent);

export default membersModule;

