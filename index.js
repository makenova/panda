function leftpad (string, pads) {
  if(!pads) pads = 2; // default padding
  string = string.toString(); // make sure I have a string
  if (string.length >= pads) return string;
  return leftpad('0' + string, pads);
}

function convert (timeInSeconds, options) {
  timeInSeconds = parseInt(timeInSeconds, 10); // throw away decimals
  if (isNaN(timeInSeconds)) throw new Error('Cannot parse convert input')

  if (options && options.hours) {
    var hours = Math.floor(timeInSeconds / 3600)
  }

  var minutes = (options && options.hours)
    ? (timeInSeconds - hours * 3600) / 60
    : Math.floor(timeInSeconds / 60)

  var seconds = (options && options.hours)
    ? leftpad(timeInSeconds - (minutes * 60) - (hours * 3600))
    : leftpad(timeInSeconds - (minutes * 60))

  return (options && options.hours)
    ? leftpad(hours) + ' : ' + leftpad(minutes) + ' : ' + seconds
    : leftpad(minutes) + ' : ' + seconds
}

module.exports = convert;
