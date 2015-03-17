(function() {
    'use strict';

    /**
     * super-simple templating
     */

    function templatize(template, context) {
        return template.replace(/\[:(\w+)\]/g, function(match, key) {
            if (context[key] instanceof Function) {
                return context[key]();
            } else {
                return context[key];
            }
        });
    }


    if (module) {
        module.exports = templatize;
    }
})();
