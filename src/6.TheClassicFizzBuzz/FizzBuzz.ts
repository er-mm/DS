//FizzBuzz: Classic Interview Ques
/**
 * WAP that console.logs the numbers from 1 to n.
 * But for multiples of three print "fizz"
 * for multiples of five print "buzz"
 * for numbers which are multiple of both 3 and 5 print "fizzbuzz"
 * --- Example
 * fizzBuzz(5); it will print 1 2 fizz 4 buzz
 */

const numberForFizzBuzz = 15;
function fizzBuzz1(n: number) {
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz"); //we can write it as if(i % 15 === 0)
		else if (i % 3 === 0) console.log("fizz");
		else if (i % 5 === 0) console.log("buzz");
		else console.log(i);
	}
}
fizzBuzz1(numberForFizzBuzz);

