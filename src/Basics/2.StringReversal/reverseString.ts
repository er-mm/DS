// Solution 1: use reverse method
const str = 'hello world';
function reverseString1(str: string) {
	return str
		.split('')
		.reverse()
		.join('');
	// return [...str].reverse().join(''); 
}
const reversedString1 = reverseString1(str);
console.log('reverseString by sol #1 -> ', reversedString1);

// Solution 2: use loop 
/*
1. create an empty string called reversed. 
2. for each char in the provided string: take the char and add it to the start of reversed
3. return the reversed variable
*/
function reverseString2(str: string) {
	let reversedDtring = '';
	for (let char of str ) {
		reversedDtring = char + reversedDtring
	}
	return reversedDtring;
}
const reversedString2 = reverseString2(str);
console.log('reverseString by sol #2 -> ', reversedString2);

// Solution 3*: use loop with reduce

function reverseString3(str: string) {
	debugger;
	return str.split('').reduce((reversed, charFromStr) => charFromStr + reversed, '');
}
const reversedString3 = reverseString3(str);
console.log('reverseString by sol #3 -> ', reversedString3);