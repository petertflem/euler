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

function isPrime(n) {
    if (n <= 3) { return n > 1; }
    if (n % 2 == 0 || n % 3 == 0) { return false; }
    for (var  i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) { return false; }
    }
    return true;
}