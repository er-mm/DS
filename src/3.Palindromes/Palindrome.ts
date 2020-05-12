// Given a string - return truw if it is palindrome else false. 
// Solution 1: use reverse method (we can use any of the 3 solutions to reverse a string. I used Solution 1)
const givenString = 'naman';
function isPalindrome(str: string) {
	return str.split('').reverse().join('') === str;
}
const palindrome = isPalindrome(givenString);
console.log('palondrome by sol #1 -> ', palindrome);

// Solution 2: use array.every : 
// we take the first element of the array and compare it with last element
// then compare 2nd element to 2nd last and so on
// not an ideal sol because  of so much coparisons
//its for interviews - how it works 
function isPalindrome2(str: string) {
	return str.split('').every((char, index) => char === str[str.length - index - 1]);
}
const palindrome2 = isPalindrome2(givenString);
console.log('palondrome by sol #1 -> ', palindrome2);