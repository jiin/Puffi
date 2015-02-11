'use strict';

describe('Filter: myFilters', function () {

  // load the filter's module
  beforeEach(module('puffiApp'));

  // initialize a new instance of the filter before each test
  var myFilters;
  beforeEach(inject(function ($filter) {
    myFilters = $filter('myFilters');
  }));

  it('should return the input prefixed with "myFilters filter:"', function () {
    var text = 'angularjs';
    expect(myFilters(text)).toBe('myFilters filter: ' + text);
  });

});
