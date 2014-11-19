function Handler(fn) {
	this.func = fn;
	return this;
}
Handler.prototype.handle = function(errMsg, callback) {
	this.exceptions[errMsg] = callback;
}
Handler.prototype.try = function(context) {
	context = context || this;
	try {
		this.func.call(context);
	} catch(e) {
		if (this.exceptions[e.message]) {
			this.exceptions[e.message].call(e, context);
		} else {
			throw e;
		}
	}
}

// example usage
new Handler(function() {
	// do something risky here
}).handle('TypeError', function() {
	// handle a type error here
}).handle('undefined is not a function', function() {
	// you might have expected a member that's not there?
}).try();
