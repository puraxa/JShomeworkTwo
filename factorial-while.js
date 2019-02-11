const calcFactorial = (n) => {
  let result = 1;
  let i=1;
  while(i<=number){
    result*=i++;
  }
  return result;
}

let number = 0;

if(number < 0){
  console.log('Negativni brojevi nemaju faktorijel!');
}
else {
  console.log(calcFactorial(number));
}