#!/usr/bin/env node
var args = require('minimist')(process.argv.slice(2), {
    default : {
        '@path' : [],
        styl    : '.'
    }
})
var fs     = require('fs')
var path   = require('path')
var stylus = require('stylus')
var rpl    = require('replace-require')
var esc    = require('js-string-escape')

if (typeof args['@path'] == 'string') args['@path'] = [args['@path']]

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', function(data) {
    replaceAndDie(data,args.styl)
})

if (args['_'].length > 0) {
    var src  = fs.readFileSync(args['_'][0],'utf-8')
    var dir  = path.dirname(args['_'][0])
    replaceAndDie(src,dir)
}

function replaceAndDie(src, dir) {
    var _src = rpl(src, function(target) {
        if (target.indexOf('.styl') >= 0) {
            var _file = target.slice(9,-2)
            var _src  = fs.readFileSync(path.resolve(dir,_file),'utf-8')
            var _styl = stylus(_src)
            if (args['@path']) args['@path'].forEach(function(p) { _styl.include(path.resolve(dir,p)) })
            if (args['inline-images']) _styl.define('url', stylus.url({ paths : [dir].concat(args.path) }))
            var style = _styl.render()
            return '"'+esc(style)+'"'
        }
    })
    process.stdout.write(_src)
    process.exit(0)
}
