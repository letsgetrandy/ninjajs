(function() {
    'use strict';

    /**
     * Simple JS template rendering function
     */

    function render(obj, template) {
        var re, val, match;
        re = new RegExp("\\[\\[([^\\]]+)\\]\\]");
        while (match = re.exec(template)) {
            val = obj[match[1]] || '';
            template = template.replace(match[0], val);
        }
        return template;
    }


    if (module) {
        module.exports = render;
    }
})();
