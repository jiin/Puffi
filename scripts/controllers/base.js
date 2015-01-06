'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:BaseCtrl
 * @description
 * # BaseCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('BaseCtrl', function ($scope, BLOG, Page) {
    $scope.blog = BLOG;

    $scope.$watch(function() {
      return Page.get();
    }, function (newPage) {
      $scope.page = newPage;
    });

    $scope.setPage = function(page) {
      Page.set(page);
    }
  });
