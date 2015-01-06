'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('PostCtrl', function ($scope, $routeParams, $location, $cacheFactory, Posts) {

    var pid = $routeParams.id - 1;

    if (!$cacheFactory.get('puffi')) {
      Posts.get(function (data) {
        $scope.loaded = true;
        $cacheFactory('puffi').put('posts', data.posts)
        $scope.posts = data.posts;

        if (!$scope.posts[pid])
          $location.path('/error/404');

        $scope.post = $scope.posts[pid];
      });
    } else {
      $scope.loaded = true;
      $scope.posts = $cacheFactory.get('puffi').get('posts');

      if (!$scope.posts[pid])
        $location.path('/error/404');

      $scope.post = $scope.posts[pid];
    }
  });
