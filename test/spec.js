var assert = require('assert')
var style  = require('./style.styl')

it('allows you to require stylus files', function() {
    assert(style.indexOf('body {  background-color: #ffc0cb;}' == 0))
})
