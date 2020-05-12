// Given an integer like 123 or -51 reverse like it become 321 or -15 (500 -5, -90 - -9)
// Solution 1: use toString and reverse like we do in strings. use Math.sign(n) to check the signs it will return 1 if positive and -1 if negative
const givenInteger = -123;
function reverseInteger(givenInteger: number) {
	// return parseInt(givenInteger.toString().split('').reverse().join('')) // it won't work for negative values
	return parseInt(givenInteger.toString().split('').reverse().join('')) * Math.sign(givenInteger) // use Math.sign(n)
}
const reversedInteger = reverseInteger(givenInteger);
console.log('reverseInteger by sol #1 -> ', reversedInteger);

