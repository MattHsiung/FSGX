import angular from 'angular';
import AuthInterceptorFactory from './authinterceptor.factory';
import AuthEvents from './authEvents.const';
import AuthFactory from './auth.factory';

let FSAModule = angular.module('FSA', [])

.factory('AuthInterceptor', AuthInterceptorFactory)
.constant('AUTH_EVENTS', AuthEvents)
.factory('AuthFactory', AuthFactory)
.config(['$httpProvider', ($httpProvider) => {
    $httpProvider.interceptors
    .push(['$injector', $injector => $injector.get('AuthInterceptor')]);
}]);

export default FSAModule;