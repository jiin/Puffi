'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:ErrorCtrl
 * @description
 * # ErrorCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('ErrorCtrl', function ($scope, $routeParams) {
    $scope.code = $routeParams.code;
  });
