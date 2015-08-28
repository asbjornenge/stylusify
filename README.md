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
// => string, body {  background-color: #ffc0cb;} 
```

### Options

```sh
browserify -t [stylusify --inline-images] entry.js    // url(yolo.png) => url("data:image/png;base64,iVBOR...")
browserify -t [stylusify --autoprefix] entry.js       // display: -ms-flexbox 
```

## Changelog

### 2.1.0

* Added support for [autoprefixer](https://github.com/jenius/autoprefixer-stylus)

### 2.0.0

* Added support for inlining images :rocket:

### 1.0.2

* Properly escaping css string

### 1.0.1

* Removed som logging 

### 1.0.0

* Initial release :tada:

enjoy
