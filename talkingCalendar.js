const talkingCalendar = function(date) {
  // Your code here
  let newDate = date.split("/");
  
  let month = parseInt(newDate[1], 10);
  let day = parseInt(newDate[2], 10);
  let year = newDate[0];
  let newMonth;
  switch (month) {
    case 1:
      newMonth = "January";
       break;
    case 2:
      newMonth = "February";
      break;
    case 3:
      newMonth = "March";
      break;
    case 4:
      newMonth = "April";
      break;
    case 5:
      newMonth = "May";
      break;
    case 6:
      newMonth = "June";
      break;
    case 7:
      newMonth = "July";
      break;
    case 8:
      newMonth = "August";
      break;
    case 9:
      newMonth = "September";
      break;
    case 10:
      newMonth = "October";
      break;
    case 11:
      newMonth = "November";
      break;
    case 12:
      newMonth = "December";
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

  newDate = `${newMonth} ${day}, ${year}`
  return newDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));