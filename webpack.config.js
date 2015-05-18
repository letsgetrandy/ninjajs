/*global __dirmane:false */
var webpack = require('webpack'),
    path = require('path');

module.exports = {
    "context": __dirname,
    "entry": {
        "ninjajs": "./ninja"
    },
    "output": {
        "path": __dirname + "/dist",
        "filename": "ninja.js"
    },
    "plugins": [
        /*
        new webpack.optimize.UglifyJsPlugin({
            "comments": false,
            "output": { "comments": false }
        })
        */
    ],
    "resolve": {
        "root": __dirname + "/src/"
    }
};
