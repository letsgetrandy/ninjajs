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
}

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



// tests


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

for (verb in tests) {
	var past = getPastTense(verb);
	console.log('Expect "' + verb + '" to be "' + tests[verb] + '": ' + (past === tests[verb] ? 'PASS' : 'FAIL (' + past + ')')   );
}
