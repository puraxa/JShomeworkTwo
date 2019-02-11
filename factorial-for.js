const calcFactorial = (n) => {
  let result = 1;
  for(let i = 2; i <= number; i++){
    result *= i;
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