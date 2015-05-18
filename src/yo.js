/**
 *  super-simple in-app messaging inspired by the Yo! app
 */
function yo(fn) {
	'use strict';

    if (typeof yo.listeners === 'undefined') {
        yo.listeners = [];
    }

	if (fn instanceof Function) {
		yo.listeners.push(fn);
	} else {
        var func;
        for (func in yo.listeners) {
            if (yo.listeners.hasOwnProperty(func)) {
                yo.listeners[func](fn)
            }
		}
	}
}

module.exports = yo;
