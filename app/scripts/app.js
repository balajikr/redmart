'use strict';

/**
 * @ngdoc overview
 * @name redmartApp
 * @description
 * # redmartApp
 *
 * Main module of the application.
 */
angular
  .module('redmartApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
    .when('/createContact', {
        templateUrl: 'views/createContact.html',
        controller: 'contactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

