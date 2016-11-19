#!/usr/bin/env node

'use strict'

let panda = require('./')

let hoursBool =  process.argv[3] === 'true' ? { hours: true } : null
console.log(panda(process.argv[2], hoursBool))
