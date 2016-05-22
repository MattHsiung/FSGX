import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import FSA from './fsa/FSA';
import './common.sass';

let commonModule = angular.module('app.common', [
  Navbar.name,
  User.name,
  FSA.name
]);

export default commonModule;
