function* primeGenerator() {
  var index = 3;
  yield 2;
  while (true) {
    if (isPrime(index))
      yield index;
    
    index += 2;
  }
}

BRING_ME_ANOTHOR_PRIME = primeGenerator();

var sum = 0;
while (true) {
  var prime = BRING_ME_ANOTHOR_PRIME.next().value;
  
  if (prime > 2000000)
    break;
  else
    sum += prime;
}

console.log(sum);



function isPrime(number) {
  var upperLimit = Math.ceil(Math.sqrt(number));
  var count = 2;
  
  if (number === 0 || number === 1)
    return false;
  
  if (number === 2)
    return true;
    
  while (count <= upperLimit) {
    if (number % count === 0)
      return false;
    
    count += 1;
  }
  
  return true;
}