var all = require('../all'),
	assert = require('assert');

describe('all()', function() {
	'use strict';

	it('should return true when all arguments evaluate as truthy', function() {
		assert.equal(all(1, 2, 3, 4, 5), true);
		assert.equal(all(true, true, true), true);
		assert.equal(all('foo', 'bar'), true);
	});

	it('should return false if any of the arguments evaluate as falsy', function() {
		assert.equal(all(0, 1, 2), false);
		assert.equal(all(true, true, false), false);
		assert.equal(all('foo', ''), false);
		assert.equal(all('foo', null), false);
		assert.equal(all('foo', void 0), false);
	});

	it('should return false if no arguments were provided', function() {
		assert.equal(all(), false);
	});
});
