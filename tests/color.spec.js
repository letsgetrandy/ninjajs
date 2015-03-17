var Color = require('../color'),
	assert = require('assert');

describe('Color', function() {
	'use strict';

	it('should allow R, G, B values as arguments in constructor', function() {
		var c = new Color(255, 252, 249);
		assert.equal(c.r, 255);
		assert.equal(c.g, 252);
		assert.equal(c.b, 249);
	});

	it('should allow R, G, B values as array in constructor', function() {
		var c = new Color([255, 252, 249]);
		assert.equal(c.r, 255);
		assert.equal(c.g, 252);
		assert.equal(c.b, 249);
	});

	it('should allow 6-char #HEX color in constructor', function() {
		var c = new Color('#FFEEDD');
	});

	it('should allow 3-char #HEX color in constructor', function() {
		var c = new Color('#FFEEDD');
	});

	it('should allow HEX color even without # sign', function() {
		var c = new Color('#FFEEDD');
	});

});
