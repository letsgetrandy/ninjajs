var render = require('../src/render'),
    assert = require('assert');

describe('render()', function() {
    'use strict';

    it('should render an object into a template', function() {
        var model = {
                "firstname": "Fred",
                "lastname": "Flintstone",
                "classname": "red"
            },
            template = '<div class="[[classname]]"><span>[[firstname]] [[lastname]]</span></div>',
            s = render(model, template);
        assert.equal(s, '<div class="red"><span>Fred Flintstone</span></div>');
    });

});
