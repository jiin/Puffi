'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('MainCtrl', function ($scope, $cacheFactory, Posts) {
    $scope.loaded = false;

    if (!$cacheFactory.get('puffi')) {
      Posts.get(function (data) {
        $scope.loaded = true;
        $scope.posts  = data.posts;
        $cacheFactory('puffi').put('posts', $scope.posts);
      });
    } else {
      $scope.loaded = true;
      $scope.posts = $cacheFactory.get('puffi').get('posts');
    }
  });
