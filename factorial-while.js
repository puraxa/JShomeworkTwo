let number = 10;
let result = 1;

if(number < 0){
  console.log('Negativni brojevi nemaju faktorijel!');
}
else {
  let i=1;
  while(i<=number){
    result*=i++;
  }
  console.log(result);
}