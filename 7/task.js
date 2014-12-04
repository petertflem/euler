var index = 0;
var count = 0;
var found = false;

while (!found) {
	if (isPrime(index)) 
		count++;
		
	if (count === 10001)
		found = true;
	else
		index += 1;
}

console.log(index);

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