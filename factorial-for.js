let number = 10;
let result = 1;

if(number < 0){
  console.log('Negativni brojevi nemaju faktorijel!');
}
else {
for(let i = 1; i <= number; i++){
  result*=i;
}

console.log(result);
}