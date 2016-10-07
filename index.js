function leftpad (string, pads) {
  if(!pads) pads = 2; // default padding
  string = string.toString(); // make sure I have a string
  if (string.length >= pads) return string;
  return leftpad('0' + string, pads);
}

function convert (timeInSeconds) {
  timeInSeconds = parseInt(timeInSeconds, 10); // throw away decimals
  if (isNaN(timeInSeconds)) throw new Error('Cannot parse convert input')
  var minutes = Math.floor(timeInSeconds / 60);
  var seconds = leftpad((timeInSeconds - (minutes * 60)));

  return leftpad(minutes) + ' : ' + seconds;
}


module.exports = convert;
