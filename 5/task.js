var number = 2*3*4*5*6*7*8*9*10*11*12*13*14*15*16*17*18*19*20;
var smaller = number / 2 / 2 / 2 / 2 / 2 / 2 / 2 / 2 / 2 / 2 / 2 / 2 / 2 / 2;
var a = smaller / 3 / 3 / 3 / 3 / 3 / 3;
var b = a / 5 / 5 / 5;
var c = b / 7;

console.log(c);

function divide(number) {
	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].forEach(function (prime) {
		console.log(number + ' / ' + prime + ' = ' + number / prime);
	});
}