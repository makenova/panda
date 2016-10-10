# panda

[![Build Status](https://travis-ci.org/makenova/panda.svg?branch=master)](https://travis-ci.org/makenova/panda)

🐼 format seconds as a digital clock string 🐼

[Panda, 🐼, Panda, 🐼, Panda](http://genius.com/Desiigner-panda-lyrics)

## Install

```sh
npm install --save @makenova/panda

# OR install it globally for cli use

npm install -g @makenova/panda
```

## Use

```js
var convert = require('@makenova/panda')
convert(7250) // => '120 : 50'
convert(45012, { hours: true }) // => '12 : 30 : 12'
```

or in with `import`

```js
import convert from '@makenova/panda')
convert(7250) // => '120 : 50'
convert(45012, { hours: true }) // => '12 : 30 : 12'
```

or if you installed it globally,

```sh
panda 45012 true # => 750 : 12
panda 45012 # => 12 : 30 : 12
```
