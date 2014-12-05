var n = 2;
var m = 3;
var found = false;

while (!found) {
  var sum = 0;
  
  while (findGCD(m, n) === 1 && sum < 1000)
  {
    var a = Math.pow(m, 2) - Math.pow(n, 2);
    var b = 2 * m * n;
    var c = Math.pow(m, 2) + Math.pow(n, 2);
    
    sum = a + b + c;
    
    if (sum === 1000)
      found = true;
    else
      m += 2;
  }
    
  n++;
  m = n + 1;
}

function findGCD(a, b) {
  if (!b)
    return a;
  
  return findGCD(b, a % b);
}