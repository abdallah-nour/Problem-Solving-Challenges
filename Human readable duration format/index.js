const secondsInMinute = 60;
const secondsInHour = secondsInMinute * 60;
const secondsInDay = secondsInHour * 24;
const secondsInYear = secondsInDay * 365;

function secondsToDurations(seconds) {
  const year = Math.floor((seconds / secondsInYear));;
  seconds %= secondsInYear;
  const day = Math.floor((seconds / secondsInDay));;
  seconds %= secondsInDay;
  const hour = Math.floor((seconds / secondsInHour));;
  seconds %= secondsInHour;
  const minute = Math.floor((seconds / secondsInMinute));;
  seconds %= secondsInMinute;
  const time = {
    year,
    day,
    hour,
    minute,
    second: seconds
  };
  return Object
    .entries(time)
    .filter((value) => value[1])
    .map(value => `${value[1]} ${value[0]}${value[1] > 1 ? "s" : ""}`)
}

function beautifyStringSorting(...arr) {
  const last = arr.pop();
  return arr.join(", ") + (arr.length === 0 ? last : (" and " + last));
}

function formatDuration(seconds, durations = secondsToDurations(seconds)) {
  return !durations.length ? "now" : beautifyStringSorting(...durations);
}

// codewars solution
function formatDuration1(seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
    res = [];

  if (seconds === 0) return 'now';

  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds / time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }

  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0]
}

// Codewars highest ranks solutions
function formatDuration1(seconds) {
  if (!seconds) return "now";
  var strout = "";
  var s = seconds % 60;
  seconds = (seconds - s) / 60;
  var m = seconds % 60;
  seconds = (seconds - m) / 60;
  var h = seconds % 24;
  seconds = (seconds - h) / 24;
  var d = seconds % 365;
  seconds = (seconds - d) / 365;
  var y = seconds;

  var english = [];
  if (y) english.push(y + " year" + (y > 1 ? 's' : ''));
  if (d) english.push(d + " day" + (d > 1 ? 's' : ''));
  if (h) english.push(h + " hour" + (h > 1 ? 's' : ''));
  if (m) english.push(m + " minute" + (m > 1 ? 's' : ''));
  if (s) english.push(s + " second" + (s > 1 ? 's' : ''));

  return english.join(", ").replace(/,([^,]*)$/, " and$1");
}

function formatDuration2(seconds) {
  if (!seconds) return "now";
  var strout = "";
  var s = seconds % 60;
  seconds = (seconds - s) / 60;
  var m = seconds % 60;
  seconds = (seconds - m) / 60;
  var h = seconds % 24;
  seconds = (seconds - h) / 24;
  var d = seconds % 365;
  seconds = (seconds - d) / 365;
  var y = seconds;

  var english = [];
  if (y) english.push(y + " year" + (y > 1 ? 's' : ''));
  if (d) english.push(d + " day" + (d > 1 ? 's' : ''));
  if (h) english.push(h + " hour" + (h > 1 ? 's' : ''));
  if (m) english.push(m + " minute" + (m > 1 ? 's' : ''));
  if (s) english.push(s + " second" + (s > 1 ? 's' : ''));

  return english.join(", ").replace(/,([^,]*)$/, " and$1");

}

module.exports = { formatDuration, beautifyStringSorting, secondsToDurations };
