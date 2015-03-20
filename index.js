var transformTools = require('browserify-transform-tools')
var stylus         = require('stylus')

module.exports = transformTools.makeStringTransform(
    "stylusify", 
    {
        includeExtensions: [".styl"]
    },
    function (content, opts, done) {
        stylus(content).render(function(err, css) {
            if (err) { return done(err) }
            return done(null, 'module.exports="'+css.replace(/\n/g,'')+'"')
        })
    }
)
