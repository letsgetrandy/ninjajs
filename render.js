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


    // /* sample call to the function */
    // var template = '<div class="[[classname]]"><span>[[firstname]] [[lastname]]</span><br><span>[[message]]</span></div>';
    // var obj = { firstname:"Randy", lastname:"Hunt", message:"Hello world!", classname="display" };
    // document.write(render(obj, template));

    /* OUTPUT:
        <div class="display">
            <span>Randy Hunt</span><br>
            <span>Hello World!</span>
        </div>
    */

    if (module) {
        module.exports = render;
    }
})();
