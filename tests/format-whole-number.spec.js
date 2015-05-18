var fmtWholeNum = require('../src/format-whole-number'),
    assert = require('assert');

describe('fmtWholeNum()', function() {
    'use strict';

    it('should format a whole number with commas separating digit triples', function() {
        var s = fmtWholeNum( 10250030.16 );
        assert.equal(s, '10,250,030');
    });
});
