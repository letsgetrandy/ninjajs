var getPastTense = require('../past-tense'),
	assert = require('assert');

describe('getPastTense', function() {
	'use strict';

	var tests = {
		"bake": "baked",
		"smile": "smiled",
		"free": "freed",
		"dye": "dyed",
		"tiptoe": "tiptoed",
		"travel": "traveled",
		"model": "modeled",
		"distil": "distilled",
		"equal": "equalled",
		"admit": "admitted",
		"commit": "committed",
		"refer": "referred",
		"inherit": "inherited",
		"visit": "visited",
		"stop": "stopped",
		"tap": "tapped",
		"sob": "sobbed",
		"treat": "treated",
		"wheel": "wheeled",
		"pour": "poured",
		"picnic": "picnicked",
		"mimic": "mimicked",
		"traffic": "trafficked"
	};

	it('should correctly provide the past tense for the specified cases', function() {
		var verb;
		for (verb in tests) {
			// var past = getPastTense(verb);
			assert.equal(getPastTense(verb), tests[verb]);
			// console.log('Expect "' + verb + '" to be "' + tests[verb] + '": ' + (past === tests[verb] ? 'PASS' : 'FAIL (' + past + ')')   );
		}

	});
});
