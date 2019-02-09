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

year = 2100;

if(restOfDivide(year,four)){
  if(restOfDivide(year,hundred)){
    if(restOfDivide(year,fourHundred)){
      console.log('godina '+ year+' je prestupna');
    }
    else{
      console.log('not prestupna');
    }
  }
  else{
    console.log('godina '+ year+' je prestupna');
  }
}
else {
  console.log('not prestupna');
}