// super-simple templating
function templatize(template, context) {
    return template.replace(/\[:(\w+)\]/g, function(match, key) {
        if (context[key] instanceof Function) {
            return context[key]();
        } else {
            return context[key];
        }
    });
}

// example usage
var object = {
        "foo": "hello",
        "bar": "world",
        "punctuation": function() {
            return "!";
        }
    },
    template = '[:foo] [:bar][:punctuate]',
    s = templatize(template, object);

console.log(s); // hello world!
