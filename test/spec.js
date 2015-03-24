var assert = require('assert')
var style  = require('./style.styl')

it('allows you to require stylus files', function() {
    assert(style.indexOf('body {  background-color: #ffc0cb;}' == 0))
})

it('correctly escapes css string', function() {
    assert(style.indexOf('url(\"') > 0)
})

it('can inline images', function() {
    console.log(style)
    assert(style.indexOf('base64') > 0)
})
