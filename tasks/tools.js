const colors = require('ansi-colors');

const dateFormat = (date, rules) => {
  let cDate = new Date(date || '');

  let fullYear = cDate.getFullYear();
  let month = cDate.getMonth() + 1;
  let day = cDate.getDate();
  let hours = cDate.getHours();
  let minutes = cDate.getMinutes();
  let seconds = cDate.getSeconds();
  let week = cDate.getDay();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hours = hours >= 10 ? hours : "0" + hours;
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  seconds = seconds >= 10 ? seconds : "0" + seconds;

  let cRules = rules && typeof rules === 'string' ? rules : 'YYYY-MM-DD hh:mm:ss';

  return cRules
    .replace("YYYY", fullYear)
    .replace("MM", month)
    .replace("DD", day)
    .replace("hh", hours)
    .replace("mm", minutes)
    .replace("ss", seconds)
    .replace('ww', week);
}

const startingLog = (eventName, taskName, time) => {
  let cTime = dateFormat(time || '', 'hh:mm:ss');
  console.log(`[${colors.gray(cTime)}] ${eventName} '${colors.cyan(taskName)}' ...`)
}

const finishedLog = (eventName, taskName, startTime, endTime) => {
  let cTime = dateFormat(endTime || '', 'hh:mm:ss');
  console.log(`[${colors.gray(cTime)}] ${eventName} '${colors.cyan(taskName)}' after ${colors.blue((endTime - startTime) + ' ms')}`)
}


exports.startingLog = startingLog;
exports.finishedLog = finishedLog;