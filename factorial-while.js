const calcFactorial = (n) => {
  let result = 1;
  let i = 2;
  while(i<=n){
    result *= i++;
  }
  return result;
}

let number = 5;

if(number < 0){
  console.log('Negativni brojevi nemaju faktorijel!');
}
else {
  console.log(calcFactorial(number));
}