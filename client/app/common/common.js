import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import FSA from './fsa/FSA';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  FSA.name
]);

export default commonModule;
