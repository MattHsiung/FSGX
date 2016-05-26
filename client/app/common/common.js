import angular from 'angular';
import Navbar from './navbar/navbar';
import FSA from './fsa/FSA';
import './common.sass';

let commonModule = angular.module('app.common', [
  Navbar.name,
  FSA.name
]);

export default commonModule;