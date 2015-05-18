/**
 *  super-simple in-app messaging inspired by the Yo! app
 */
function yo(fn) {
	'use strict';

	if (fn instanceof Function) {
		this.listeners.push(fn);
	} else {
		_.each(this.listeners, function (listener) {
			listener(fn);
		});
	}
}

module.exports = yo;
