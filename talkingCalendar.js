const talkingCalendar = function(date) {
  // Your code here
  let newDate = date.split("/");
  
  let month = parseInt(newDate[1], 10);
  let day = parseInt(newDate[2], 10);
  let year = newDate[0];
  
  switch (month) {
    case 1:
      month = "January";
       break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;            
  }

  if (day === 1 || day === 21 || day === 31) {
    day += 'st';
  }
  else if (day === 2 || day === 22) {
    day += 'nd';
  }
  else {
    day += 'th';
  }

  newDate = `${month} ${day}, ${year}`
  return newDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));