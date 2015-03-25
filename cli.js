#!/usr/bin/env node
var args = require('minimist')(process.argv.slice(2), {
    default : {
    }
})
var fs   = require('fs')
var path = require('path')
var styl = require('stylus')
var rpl  = require('replace-require')
var esc  = require('js-string-escape')

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', function(data) {
    replaceAndDie(data,'.')
})

if (args['_'].length > 0) {
    var src  = fs.readFileSync(args['_'][0],'utf-8')
    var dir  = path.dirname(args['_'][0])
    replaceAndDie(src,dir)
} 

function replaceAndDie(src, dir) {
    var _src = rpl(src, function(target) {
        if (target.indexOf('.styl') >= 0) {
            var _file  = target.slice(9,-2)
            var _style = fs.readFileSync(path.resolve(dir,_file),'utf-8')
            return '"'+esc(styl(_style).render())+'"'
        }
    })
    process.stdout.write(_src)
    process.exit(0)
}
