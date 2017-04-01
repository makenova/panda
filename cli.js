#!/usr/bin/env node

'use strict'

const panda = require('./')
const firstArg = process.argv[2]

function strip(string) {
  return string.raw[0].split('\n').map(line => line.trim()).join('\n')
}

if (!firstArg) {
  console.log(strip`
    Usage
      $ panda <seconds> [show_hours_boolean]

    Examples
      $ panda 45012
      750 : 12

      $ panda 45012 true
      12 : 30 : 12
  `)
} else {
  let hoursBool =  process.argv[3] === 'true' ? { hours: true } : null
  console.log(panda(firstArg, hoursBool))
}
