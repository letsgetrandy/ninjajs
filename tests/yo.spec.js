var yo = require('../src/yo'),
    assert = require('assert');

describe('yo', function() {
    'use strict';

    it('should register a listener when a function is passed', function() {
        yo(function() { });
        assert.equal(true, typeof yo.listeners[0] === 'function');
    });

    it('should send an event to registered listeners if passed data is not a function', function() {
        var called = null,
            foo = function(data) {
                called = data;
            };

        yo(foo);
        yo(1);
        assert.equal(called, 1);
    });
});
