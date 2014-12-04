var sum = 0;
var fib = [1, 2];
var evenfib = [2];
var newfib = 0;

while(newfib < 4000000) {
	
	var prev = fib[fib.length - 1];
	var prevprev = fib[fib.length - 2];
	var newfib = prev + prevprev;
	fib.push(newfib);
	
	if (newfib % 2 === 0 && newfib < 4000000)
		evenfib.push(newfib);
}

console.log(evenfib.reduce(function (prev, curr) { return prev + curr; }));