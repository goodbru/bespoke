// Multiples of 3 print "Fizz"
// Multiples of 5 print "Buzz"
// Both a multiple of 5 and 3 print "FizzBuzz"
var blah=100;
for (i=1; i<=blah; i++) {
	if (i%3 === 0 && i%5===0) {
		console.log("FizzBuzz");
	}
	else if (i%3 === 0) {
		console.log("Fizz");
	}
	else if (i%5 === 0) {
		console.log("Buzz");
	}
	else {
		console.log(i);
	}
}