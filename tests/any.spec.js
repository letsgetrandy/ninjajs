var any = require('../src/any'),
    assert = require('assert');

describe('any()', function() {
    'use strict';

    it('should return true when any arguments evaluate as truthy', function() {
        assert.equal(any(1, 2, 3, 4, 5), true);
        assert.equal(any(true, true, true), true);
        assert.equal(any('foo', 'bar'), true);
        assert.equal(any(0, 1, 2), true);
        assert.equal(any(true, true, false), true);
        assert.equal(any('foo', ''), true);
        assert.equal(any('foo', null), true);
        assert.equal(any('foo', void 0), true);
    });

    it('should return false if no arguments evaluate as truthy', function() {
        assert.equal(any(0, 0, 0, 0), false);
        assert.equal(any(false, false, false), false);
        assert.equal(any(null, null, null), false);
        assert.equal(any(void 0, void 0), false);
    });

    it('should return false if no arguments were provided', function() {
        assert.equal(any(), false);
    });
});
