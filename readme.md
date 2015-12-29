# hash-regex [![Build Status](https://travis-ci.org/radiovisual/hash-regex.svg?branch=master)](https://travis-ci.org/radiovisual/hash-regex)

> Converts an array of strings to a regular expression of hashtags


## Install

```
$ npm install --save hash-regex
```

## Usage

```js
const hashRegEx = require('hash-regex');

const regEx1 = hashRegEx(['foo','bar','baz']);
//=> /#foo|#bar|#baz/gi

// Strings can have a hash sign, or not.
 const regEx2 = hashRegEx(['#withhash','withouthash']);
//=> /#withhash|#withouthash/gi
 
// The 'flags' option can override the default flags
const regEx3 = hashRegEx(['foo','bar'], {flags:'m'});
//=> /#foo|#bar/m
```

## API

### hashRegEx(array, [options])

#### array

Type: `Array`<br>
Required

The array of strings you want to convert to a RegExp of hashes. Strings can begin with hash or not. 

#### options

##### flags

Type: `String`<br>
Default: `gi`

The [RegExp flags](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp) you want to use.

## License

MIT © [Michael Wuergler](https://github.com/radiovisual)
