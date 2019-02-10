const setAlarm = (empl, vac) => {
  if(empl && !vac){
    return true;
  }
  return false;
}

let employed = true;
let onVacation = false;

console.log(setAlarm(employed,onVacation));