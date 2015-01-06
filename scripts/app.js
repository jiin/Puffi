'use strict';

/**
 * @ngdoc overview
 * @name devApp
 * @description
 * # devApp
 *
 * Main module of the application.
 */
angular
  .module('devApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'blogServices',
    'configuration',
    'hljs'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:page', {
        templateUrl: 'views/page.html',
        controller: 'PageCtrl'
      })
      .when('/post/:name/:id', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/rss', {
        templateUrl: 'views/rss.html',
        controller: 'RssCtrl'
      })
      .when('/tag/:name', {
        templateUrl: 'views/result.html',
        controller: 'TagCtrl'
      })
      .when('/error/:code', {
        templateUrl: 'views/error.html',
        controller: 'ErrorCtrl'
      })
      .otherwise({
        redirectTo: '/error'
      });

    if (window.history && window.history.pushState)
      $locationProvider.html5Mode(true);
    
  }).config(function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      tabReplace: '2'
    });
  });
