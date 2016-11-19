var ava = require('ava')
var test = ava.test
var execa = require('execa')

var convert = require('./')

test('seconds', function (t) {
  t.is(convert(0), '00 : 00')
  t.is(convert(12), '00 : 12')
  t.is(convert(35.23), '00 : 35')
})

test('minutes', function (t) {
  t.is(convert(60), '01 : 00')
  t.is(convert(1800), '30 : 00')
  t.is(convert(7250), '120 : 50')
})

test('hours', function (t) {
  t.is(convert(3600, { hours: true }), '01 : 00 : 00')
  t.is(convert(45012, { hours: true }), '12 : 30 : 12')
})

test('string', function (t) {
  t.is(convert('1800'), '30 : 00')
  t.is(convert('5400', { hours: true }), '01 : 30 : 00')
  t.throws(function(){convert('abc')}, 'Cannot parse convert input')
})

test('cli', function (t) {
  return Promise.all([
    execa.stdout('./cli.js', [10]),
    execa.stdout('./cli.js', [45032, true])
  ]).then(function (values) {
    t.is(values[0], '00 : 10')
    t.is(values[1], '12 : 30 : 32')
  }).catch(function (err) {
    t.fail(err)
  })
})
