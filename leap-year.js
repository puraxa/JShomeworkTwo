const restOfDivide = (a,b) => {
  if(a%b==0){
    return true;
  }
  else {
    return false;
  }
}

const hundred = 100;
const fourHundred = 400;
const four = 4;

let year;

year = 2336;

if(restOfDivide(year,fourHundred) || (restOfDivide(year,four) && !restOfDivide(year,hundred))){
  console.log('godina ' + year + ' je prestupna!');
}
else {
  console.log('godina ' + year + 'nije prestupna!');
}