const numberOfDays = (day, month, year) => {
  let result = 0;
  month--;
  for(let i = 0; i<month;i++){
    switch(i){
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
      case 11:
        result+=31;
        break;
      case 1:
        if(isLeapYear(year)){
          result+=29;
        }
        else {
          result+=28;
        }
        break;
      case 3:
      case 5:
      case 8:
      case 10:
        result+=30;
        break;
    }
  }
  return result+day;
}

const isLeapYear = (y) => y%400==0 || (y%4==0 && y%100!=0);

const checkDate = (d, m, y) => {
  if(m<1 || m>12){
    return true;
  }
  m--;
  if(d < 1){
    return true;
  }
  switch(m){
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      if(d>31){
        return true;
      }
      break;
    case 1:
      if(isLeapYear(y) &&  d > 29){
        return true;
      }
      if(!isLeapYear(y) && d > 28){
        return true;
      }
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      if(d>30){
        return true;
      }
      break;
    default:
      return false;
  }
}

let startDay = 1;
let startMonth = 1;
let startYear = 2016;
let endDay = 31;
let endMonth = 12;
let endYear = 2016;

if(startYear!=endYear || checkDate(startDay, startMonth, startYear) || checkDate(endDay, endMonth, endYear) || numberOfDays(endDay, endMonth, endYear)-numberOfDays(startDay, startMonth, startYear)<0){
  console.log('Date is not valid!');
}
else {
  console.log(numberOfDays(endDay, endMonth, endYear)-numberOfDays(startDay, startMonth, startYear)-1);
}