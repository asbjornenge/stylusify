# stylusify

[Browserify](http://browserify.org/) transform to require [stylus](http://learnboost.github.io/stylus/) files.

## Install

```sh
npm install --save stylusify
```

## Use

```sh
browserify -t stylusify entry.js
```

```js
var style = require('./style.styl')
console.log(typeof style, style)
// => string, body { background-color : pink }
```

enjoy
