var ava = require('ava');
var test = ava.test;

var convert = require('./index');

test('test seconds', function (t) {
  t.is(convert(0), '00 : 00')
  t.is(convert(1), '00 : 01')
  t.is(convert(12), '00 : 12')
  t.is(convert(35.23), '00 : 35')
  t.pass();
})

test('test minutes', function (t) {
  t.is(convert(60), '01 : 00');
  t.is(convert(1800), '30 : 00');
  t.pass();
})

test('test string', function (t) {
  t.is(convert('1800'), '30 : 00');
  t.throws(function(){convert('abc')}, 'Cannot parse convert input');
  t.pass();
})
