var transformTools = require('browserify-transform-tools')
var stylus         = require('stylus')
var esc            = require('js-string-escape')

module.exports = transformTools.makeStringTransform(
    "stylusify", 
    {
        includeExtensions: [".styl"]
    },
    function (content, opts, done) {
        stylus(content).render(function(err, css) {
            if (err) { return done(err) }
            return done(null, 'module.exports="'+esc(css)+'"')
        })
    }
)
