# stc-css-compress

Compress CSS for stc

## Install

```sh
npm install stc-css-compress
```

## How to use

```js
// stc.config.js

var cssCompress = require('stc-css-compress');

stc.workflow({
  cssCompress: {plugin: cssCompress, include: /\.css$/, options: {}}
})

```

## options

default options is:

```
{
  removeComment: true,
  removeLastSemicolon: true, 
  removeEmptySelector: true, 
  overrideSameProperty: true, 
  shortValue: true, 
  mergeProperty: true, 
  sortProperty: true, 
  sortSelector: true, 
  mergeSelector: true, 
  propertyToLower: true 
}
```