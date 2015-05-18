(function() {
	'use strict';

	function Handler(fn) {
		this.func = fn;
        this.exceptions = {};
		return this;
	}

	Handler.prototype.handle = function(errMsg, callback) {
		this.exceptions[errMsg] = callback;
        return this;
	};
	
    Handler.prototype.try = function(context) {
		context = context || this;
		try {
			this.func.call(context);
		} catch(e) {
			if (typeof this.exceptions[e.message] === 'function') {
				this.exceptions[e.message].call(e, context);
            } else if (typeof this.exceptions[e] === 'function') {
				this.exceptions[e].call(e, context);
			} else {
				throw e;
			}
		}
	};

    Handler.prototype.throw = function(message, name) {
        throw {
            "message": message,
            "name": name || ''
        };
    };

	if (module) {
		module.exports = Handler;
	}

})();
