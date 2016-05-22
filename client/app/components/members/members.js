import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './members.sass';

let membersModule = angular.module('members', [
  uiRouter
])

.config(($stateProvider) => {
	"ngInject";
    $stateProvider
    	.state('members', {
        	url: '/members-area',
        	template: `
        	<div class="members">
        		<img src="https://media.giphy.com/media/FqdGGgugkC4Xm/giphy.gif">
        		<h1>GET CODING</h1>
        	</div>`,
	        requireAuth: true
    	});
});

export default membersModule;

