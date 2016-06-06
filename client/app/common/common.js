import angular from 'angular';
import Navbar from './navbar/navbar';
import FSA from './fsa/FSA';
import Authentication from './auth/auth';
import './common.sass';

let commonModule = angular.module('app.common', [
  Navbar.name,
  FSA.name,
  Authentication.name
]);

export default commonModule;