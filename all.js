/**
 * Returns TRUE if all arguments passed in can be evaluated as true.
 * Otherwise, returns FALSE.
 */
function all() {
    'use strict';

    var i, l = arguments.length;
    if (l === 0) {
        return false;
    }
    for (i = 0; i < l; i++) {
        if (!arguments[i]) {
            return false;
        }
    }
    return true;
}

if (module) {
    module.exports = all;
}
