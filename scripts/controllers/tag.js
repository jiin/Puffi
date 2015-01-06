'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:TagCtrl
 * @description
 * # TagCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('TagCtrl', function ($scope, $routeParams, $cacheFactory, Posts) {
    $scope.tag  = $routeParams.name;
    $scope.type = 'tag'; 

    var tagsSearch = function(name) {
      var results = [];

      Object($scope.posts).forEach(function (post) {
        if (!!~post.tags.indexOf(name.toLowerCase())) {
          results.push(post);
        }
      });

      $scope.results = results;
    };

    if (!$cacheFactory.get('puffi')) {
      Posts.get(function (data) {
        $scope.loaded = true;
        $scope.posts  = data.posts;
        $cacheFactory('puffi').put('posts', $scope.posts);

        tagsSearch($scope.tag);
      });
    } else {
      $scope.loaded = true;
      $scope.posts = $cacheFactory.get('puffi').get('posts');

      tagsSearch($scope.tag);
    }
  });
