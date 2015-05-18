var Handler = require('../src/err-handler'),
    assert = require('assert');

describe('Handler', function() {
    'use strict';

    it('should handle errors', function() {

        var foo = 'bar';

        // example usage
        new Handler(function() {
            // do something risky here
            throw "foo";
        }).handle('TypeError', function() {
            // handle a type error here
        }).handle('undefined is not a function', function() {
            // you might have expected a member that's not there?
        }).handle('foo', function() {
            foo = 'foo';
        }).try();

        assert.equal(foo, 'foo');
    });
});
