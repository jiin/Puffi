'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:PageCtrl
 * @description
 * # PageCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('PageCtrl', function ($scope, $routeParams, Page) {
    Page.set($routeParams.page);
    $scope.templateUrl = 'views/pages/' + $routeParams.page + '.html';
  });
