import angular from 'angular';
import uiRouter from 'angular-ui-router';
import io from 'socket.io-client';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name
  ])
  .config(($urlRouterProvider, $locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/auth/:provider', () => window.location.reload());
  })

  .component('app', AppComponent)

  .run(function ($rootScope, AuthFactory, $state) {
    "ngInject";
    let destinationStateRequiresAuth = (state) => state.data && state.data.authenticate;

    $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {

      if (!destinationStateRequiresAuth(toState)) return;

      if (AuthFactory.isAuthenticated()) return;

      event.preventDefault();

      AuthFactory.getLoggedInUser()
        .then((user) => {
          (user) ? $state.go(toState.name, toParams) : $state.go('login');
        });
    });
  });

