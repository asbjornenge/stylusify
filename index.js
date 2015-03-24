var transformTools = require('browserify-transform-tools')
var stylus         = require('stylus')
var path           = require('path')
var esc            = require('js-string-escape')

module.exports = transformTools.makeStringTransform(
    "stylusify", 
    {
        includeExtensions: [".styl"]
    },
    function (content, opts, done) {
        var styl = stylus(content)
        if (opts.opts['inline-images']) styl.define('url', stylus.url({ paths : [path.dirname(opts.file)] }))
        styl.render(function(err, css) {
            if (err) { return done(err) }
            return done(null, 'module.exports="'+esc(css)+'"')
        })
    }
)
