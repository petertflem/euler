var highest = 0;

for (var i = 100; i < 1000; i++) {
  for (var j = 100; j < 1000; j++) {
    if (isPalindrome(i * j)) {
      console.log(i + ' * ' + j + ' = ' + i * j);
      highest = i * j > highest ? i * j : highest; 
    }
  }
}

console.log('answer: ' + highest);

function isPalindrome(token) {
  return token == reverse(token);
}

function reverse(token) {
  return token.toString().split('').reverse().join('');
}