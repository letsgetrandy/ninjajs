/**
 * Returns TRUE if any argument passed in can be evaluated as true.
 * Otherwise, returns FALSE.
 */
function any() {
	'use strict';

    var i, l = arguments.length;
    for (i = 0; i < l; i++) {
        if (arguments[i]) {
            return true;
        }
    }
    return false;
}

if (module) {
	module.exports = any;
}
