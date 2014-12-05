var pptg = pythagoranPrimitiveTrippleGenerator();
var found = false;

while (!found) {
  var primitiveTripple = pptg.next().value;
  var sum = 0;
  var d = 0;
  
  console.log('CHECKING VARIANTS OF PRIMITIVE: ' + '(' + primitiveTripple[0] + ',' + primitiveTripple[1] + ',' + primitiveTripple[2] + ')...')
  
  while (sum < 1000 && !found) {
    sum = primitiveTripple[0] * d + primitiveTripple[1] * d + primitiveTripple[2] * d;
    
    if (sum === 1000) {
      found = true;
      console.log('FOUND: ' + '(' + primitiveTripple[0] * d + ',' + primitiveTripple[1] * d + ',' + primitiveTripple[2] * d + '), sum: ' + sum + ', product: ' + (primitiveTripple[0] * d * primitiveTripple[1] * d * primitiveTripple[2] * d) + '.');
    } else
      d += 1;
  }
}


function getNValuesWhereGCDEqualTo1BeneathM(m) {
  var numbers = [];
  
  for (var n = 1; n < m; n++) {
    if (findGCD(n, m) === 1 && isOppositeParity(m, n))
      numbers.push(n);
  }
  
  return numbers;
}

function isOppositeParity(a, b) {
  return Math.abs(a - b) % 2 !== 0;
}

function findGCD(a, b) {
  if (!b)
    return a;
  
  return findGCD(b, a % b);
}

function* pythagoranPrimitiveTrippleGenerator() {
  var m = 2;

  while (true) {
    var nValues = getNValuesWhereGCDEqualTo1BeneathM(m);
    
    for (var i = 0; i < nValues.length; i++) {
      var a = Math.pow(m, 2) - Math.pow(nValues[i], 2);
      var b = 2 * m * nValues[i];
      var c = Math.pow(m, 2) + Math.pow(nValues[i], 2);

      yield [a, b, c];
    }

    m += 1;
  }
}