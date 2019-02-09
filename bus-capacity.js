const checkCapacity = (cap,on,wait) => {
  const result = on+wait-cap;
  if(result>0){
    return result;
  }
  return 0;
}

let maxPassengers = 150;
let waitingPassengers = 100;
let onBoardPassengers = 130;


if(checkCapacity(maxPassengers,onBoardPassengers,waitingPassengers)==0){
  console.log('He can fit all passengers');
}
else {
  console.log('He can`t fit ' + checkCapacity(maxPassengers,onBoardPassengers,waitingPassengers) + ' passengers');
}