function unixSecondsToDate(seconds){
  if(typeof seconds === 'string') seconds = parseInt(seconds);
  return new Date(seconds*1000);
}

module.exports = { unixSecondsToDate };