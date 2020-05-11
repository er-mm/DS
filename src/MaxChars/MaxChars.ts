// Given a string - return the char that is most used in the string
// example: abcccccd o/p is c 
// abcd 11234 o/p is 1
/*
Common Questions : 
1. Given a string - return the char that is most used in the string
2. Does string A have the same char/properties as string B (is it anagram?)
3. Does the given string have repeated char in it? 
All these related to find how many chars in the string. So for this: what we can do is: 
arrange the chars of string in an object with the number of chars in it.
"Hello There!" will become = {
    H:1,
    e: 3,
    l:2,
    o:1,
    " ":1,
    T:1,
    h:1,
    r:1,
    !:1
} now we can play with this object.
building an object is really strong tool
*/

const maxCharString = 'Hello There!';
function charMap(str: string) {
	let obj: { [key: string]: number } = {};
	// str
	// .split('')
	// .forEach((char: string) => {
	//     obj.hasOwnProperty(char) ? obj[char]++ : obj[char] = 1;
	// });

	// or

	for (let char of str)
		// !obj[char] ? obj[char] = 1 : obj[char]++; // obj[char] return undefined if it doesnt have value
		//or
		obj[char] = obj[char] + 1 || 1; //obj[char] + 1 gives null if it doesnt contains value
	return obj;
}

const charObj = charMap(maxCharString);
// console.log('Char Map-> ',charObj);

// Ques1 : Given a string - return the char that is most used in the string
const mostUsedChar = "abcccd";
function maxCharInString(mostUsedChar: string) {
	const charObj = charMap(mostUsedChar);
	let maxCharNumber = 0;
	let maxChar = '';
	for (let char in charObj) {
		if (charObj[char] > maxCharNumber) {
			maxCharNumber = charObj[char];
			maxChar = char;
		}
	}
	return maxChar;
}
const maxChar = maxCharInString(mostUsedChar);
console.log('Max char in String is-> ', maxChar)

//Ques2: Does string A have the same char/properties as string B (is it anagram?)
let string1 = "Hello World";
let string2 = "W!rld Hello";
function isAnagram(string1: string, string2: string) {
	const charObjString1 = charMap(string1);
	const charObjString2 = charMap(string2);
	// check objects are equal or not
	let result = true;
	if (Object.keys(charObjString1).length !== Object.keys(charObjString2).length) return false
	for (let char in charObjString1) {
		if (!(!!charObjString2[char] && charObjString1[char] === charObjString2[char])) return false;
	}
	return result;
}
const anagram = isAnagram(string1, string2)
console.log('check anagram for ', string1, ' and ', string2, ' will be -> ', anagram);

//Ques3 : Does the given string have repeated char in it? 
const stringWithRepeatedChar = "He world";
function containsRepeatedChar(stringWithRepeatedChar: string) {
	const obj = charMap(stringWithRepeatedChar);
	for (let char in obj) if (obj[char] > 1) return `yes -> repeated char is ${char} with ${obj[char]} repetitions`;
	return `no repeated char`;
}
const isRepeated = containsRepeatedChar(stringWithRepeatedChar);
console.log('contains repeated char ? ', isRepeated);
