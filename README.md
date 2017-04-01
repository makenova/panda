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
panda 45012 # => 750 : 12
panda 45012 true # => 12 : 30 : 12

# no args will print usage
panda

Usage
$ panda <seconds> [show_hours_boolean]

Examples
$ panda 45012
750 : 12

$ panda 45012 true
12 : 30 : 12
```

## API

### `convert(seconds, [options])`

Convert seconds to a string formatted as a digital clock string. The default is
`Minutes : seconds`.

###### options.hours

A boolean that indicates if hours should be displayed.

## Bugs

Please report any bugs to: https://github.com/makenova/panda/issues

## License

Licensed under the MIT License: https://opensource.org/licenses/MIT
