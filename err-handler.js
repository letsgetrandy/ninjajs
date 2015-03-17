(function() {
	'use strict';


	function Handler(fn) {
		this.func = fn;
		return this;
	}
	Handler.prototype.handle = function(errMsg, callback) {
		this.exceptions[errMsg] = callback;
	};
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
	};


	if (module) {
		module.exports = Handler;
	}
})();
