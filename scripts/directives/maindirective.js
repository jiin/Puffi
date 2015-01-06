'use strict';

/**
 * @ngdoc directive
 * @name devApp.directive:mainDirective
 * @description
 * # mainDirective
 */
angular.module('devApp')
  .directive('markdown', function ($http, $compile, $location, BLOG, Utils) {
    var converter = new Showdown.converter({ extensions: ['twitter', 'prettify'] });
    return {
      restrict: 'A',
      scope: { 
        link: '=' 
      },
      link: function (scope, element, attrs) {
        
        scope.$watch(function() {
          return scope.link;
        }, function (link) {

          if (!link) return;

          $http.get('./posts/' + link)
            .success(function (data, status, headers) {

              if (!Utils.isMarkdown(data))
                $location.path('/error/404');

              var htmlText = converter.makeHtml(data);
              element.html(htmlText);
              $compile(element.contents())(scope);
            })  
            .error(function (data, status, headers) {
              $location.path('/error/403');
            });
        });
      }
    };
  });