const checkCapacity = (cap,on,wait) => {
  const result = on+wait-cap;
  if(result>0){
    return result;
  }
  return 0;
}

let maxPassengers;
let waitingPassengers;
let onBoardPassengers;

maxPassengers = 150;
waitingPassengers = 100;
onBoardPassengers = 130;

if(checkCapacity(maxPassengers,onBoardPassengers,waitingPassengers)==0){
  console.log('He can fit all passengers');
}
else {
  console.log('He can`t fit ' + checkCapacity(maxPassengers,onBoardPassengers,waitingPassengers) + ' passengers');
}