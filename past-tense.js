(function() {
	'use strict';

	// language exceptions
	var exceptions = {
		"are": "were",
		"eat": "ate",
		"go": "went",
		"have": "had",
		"inherit": "inherited",
		"is": "was",
		"run": "ran",
		"sit": "sat",
		"visit": "visited"
	};

	// grammatically predictable rules
	function getPastTense(verb) {
		if (exceptions[verb]) {
			return exceptions[verb];
		}
		if ((/e$/i).test(verb)) {
			return verb + 'd';
		}
		if ((/[aeiou]c/i).test(verb)) {
			return verb + 'ked';
		}
		// for american english only
		if ((/el$/i).test(verb)) {
			return verb + 'ed';
		}
		if ((/[aeio][aeiou][dlmnprst]$/).test(verb)) {
			return verb + 'ed';
		}
		if ((/[aeiou][bdglmnprst]$/i).test(verb)) {
			return verb.replace(/(.+[aeiou])([bdglmnprst])/, '$1$2$2ed');
		}
		return verb + 'ed';
	}



	if (module) {
		module.exports = getPastTense;
	}

})();
