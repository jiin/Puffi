'use strict';

/**
 * @ngdoc filter
 * @name puffiApp.filter:myFilters
 * @function
 * @description
 * # myFilters
 * Filter in the puffiApp.
 */
angular.module('devApp')
  .filter('friendlyUrl', function () {
    return function (input) {
      return input.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
    };
  });
