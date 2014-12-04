function* primeGenerator() {
  var index = Math.ceil(Math.sqrt(600851475143));
  while (true) {
    if (isPrime(index))
      yield index;
    
    index -= 1;
  }
}

BRING_ME_ANOTHOR_PRIME = primeGenerator();

//console.log(isPrime(600851466877));

/*
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
console.log(BRING_ME_ANOTHOR_PRIME.next().value);
*/


var notFound = true;
while(notFound) {
  
  var prime = BRING_ME_ANOTHOR_PRIME.next().value;
  
  //console.log(prime);
  
  if (600851475143 % prime === 0) {
    console.log(prime);
    notFound = false;
  }
    
}


/*
this is the algorithm thingy sieve something

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22,23,24,25,26,27,28,29,30];
console.log(getPrimes(numbers));

function getPrimes(listOfNumbers) {
  var primes = [];
  
  numbers.forEach(function (number) {
    
    // We skip the number '1', '0' is a a marked number, skip it too.
    if (number === 1 || number === 0)
      return;
    
    var p = number;
    primes.push(p);
    
    // Remove multiples of p
    for (var i = p * 2 - 1; i < numbers.length; i += p) {
      
      numbers[i] = 0;
      console.log(numbers);
    }
  });
  
  return primes;
}
*/

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