'use strict';

/**
 * @ngdoc service
 * @name devApp.blogService
 * @description
 * # blogService
 * Service in the devApp.
 */

var blogServices = angular.module('blogServices', ['ngResource']);

blogServices
.factory('Utils', function() {
  return {
    isMarkdown: function(str) {      
      var content = document.createElement('div');
      content.innerHTML = str;
      
      for (var c = content.childNodes, i = c.length; i--;)
        if (c[i].nodeType == 1)
          return false;

      return true;
    }
  }
})
.factory('Page', function() {
  var section = '';

  return {
    get: function() {
      return section;
    },
    set: function(val) {
      section = val;
    }
  }
})
.factory('Posts', function ($resource) {
  return $resource('db/posts.json', null, {
    query: {
      method: 'GET'
    }
  });
});